from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from pathlib import Path

app = FastAPI(title="Chiller Optimization API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = Path(__file__).resolve().parent.parent
CSV_PATH = BASE_DIR / "data" / "chiller_logs.csv"


def load_data():
    df = pd.read_csv(CSV_PATH)
    df["timestamp"] = pd.to_datetime(df["timestamp"])
    return df


def infer_type(unit_id: str):
    unit_id = unit_id.upper()
    if unit_id.startswith("CT"):
        return "COOLING_TOWER"
    if unit_id.startswith("CP"):
        return "CONDENSER_PUMP"
    if unit_id.startswith("CHP") or "CHILLED" in unit_id:
        return "CHILLED_PUMP"
    return "CHILLER"


def calculate_risk_score(efficiency: float, approach: float, status: str):
    score = 0

    if efficiency >= 0.95:
        score += 45
    elif efficiency >= 0.85:
        score += 30
    else:
        score += 10

    if approach >= 6.0:
        score += 40
    elif approach >= 5.0:
        score += 25
    else:
        score += 10

    if status == "CRITICAL":
        score += 15
    elif status == "WARNING":
        score += 10
    else:
        score += 5

    return min(score, 100)


def predict_breach_time(unit_df: pd.DataFrame, limit: float = 6.5) -> int:
    try:
        if len(unit_df) < 2:
            return 0

        y = np.array(unit_df["approach"]).reshape(-1, 1)
        x = np.arange(len(y)).reshape(-1, 1)

        model = LinearRegression()
        model.fit(x, y)

        current_val = float(y[-1][0])
        slope = float(model.coef_[0][0])

        if slope <= 0:
            return 30

        steps_to_limit = (limit - current_val) / slope

        # 1 step = 1 record
        # ใน mock data เราถือว่าแต่ละ record ห่างกันประมาณ 1 วัน
        days_to_limit = max(0, int(steps_to_limit))
        return days_to_limit
    except Exception:
        return 0


@app.get("/")
def root():
    return {"message": "Chiller Optimization API is running"}


@app.get("/api/units")
def get_units():
    df = load_data()
    latest_by_unit = df.sort_values("timestamp").groupby("unit_id").tail(1)

    result = []

    for _, row in latest_by_unit.iterrows():
        unit_df = df[df["unit_id"] == row["unit_id"]].sort_values("timestamp")

        result.append({
            "id": row["unit_id"],
            "name": row["unit_id"],
            "location": row["building"],
            "type": infer_type(row["unit_id"]),
            "efficiency": float(row["eff"]),
            "status": row["status"],
            "approach": float(row["approach"]),
            "riskScore": calculate_risk_score(float(row["eff"]), float(row["approach"]), row["status"]),
            "loadRt": float(row["load_rt"]),
            "predictedDaysToBreach": predict_breach_time(unit_df)
        })

    return result


@app.get("/api/units/{unit_id}")
def get_unit_detail(unit_id: str):
    df = load_data()
    unit_df = df[df["unit_id"] == unit_id].sort_values("timestamp")

    if unit_df.empty:
        return {"error": "Unit not found"}

    latest = unit_df.iloc[-1]

    chart_data = [
        {
            "time": row["timestamp"].strftime("%m-%d %H:%M"),
            "val": float(row["eff"]),
            "approach": float(row["approach"]),
            "loadRt": float(row["load_rt"])
        }
        for _, row in unit_df.iterrows()
    ]

    return {
        "id": latest["unit_id"],
        "name": latest["unit_id"],
        "location": latest["building"],
        "type": infer_type(latest["unit_id"]),
        "efficiency": float(latest["eff"]),
        "status": latest["status"],
        "approach": float(latest["approach"]),
        "riskScore": calculate_risk_score(float(latest["eff"]), float(latest["approach"]), latest["status"]),
        "loadRt": float(latest["load_rt"]),
        "predictedDaysToBreach": predict_breach_time(unit_df),
        "chartData": chart_data
    }


@app.get("/api/summary")
def get_summary():
    df = load_data()
    latest_by_unit = df.sort_values("timestamp").groupby("unit_id").tail(1)

    avg_efficiency = round(float(latest_by_unit["eff"].mean()), 2)
    avg_approach = round(float(latest_by_unit["approach"].mean()), 2)
    critical_count = int((latest_by_unit["status"] == "CRITICAL").sum())
    warning_count = int((latest_by_unit["status"] == "WARNING").sum())
    total_units = int(len(latest_by_unit))

    return {
        "avgEfficiency": avg_efficiency,
        "avgApproach": avg_approach,
        "criticalCount": critical_count,
        "warningCount": warning_count,
        "totalUnits": total_units,
        "targetPowerTon": 0.75
    }
