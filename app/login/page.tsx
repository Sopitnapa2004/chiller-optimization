export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#030B16] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Seagate</p>
          <h1 className="mt-2 text-3xl font-black">Facility Intelligence</h1>
          <p className="mt-3 text-sm text-slate-400">
            Sign in to access the Chiller Optimization Platform.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm text-slate-400">Email</label>
            <input
              type="email"
              placeholder="engineer@company.com"
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-2xl bg-emerald-500 px-4 py-3 font-semibold text-slate-950"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}