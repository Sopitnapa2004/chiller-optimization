import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-[#030B16] text-white flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">404</p>
        <h1 className="mt-4 text-4xl font-black">Page not found</h1>
        <p className="mt-4 text-slate-400">
          The page you are looking for does not exist in this workspace.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950"
        >
          Back to Dashboard
        </Link>
      </div>
    </main>
  );
}