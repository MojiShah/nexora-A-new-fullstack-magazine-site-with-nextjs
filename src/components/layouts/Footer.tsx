import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[#0b1020]">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-12 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold text-white">NEXORA</h2>
          <p className="mt-3 text-sm text-slate-400">
            آینده تکنولوژی را از اینجا دنبال کن.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-slate-400">
          <Link href="/">خانه</Link>
          <Link href="/articles">مقالات</Link>
          <Link href="/categories/ai">هوش مصنوعی</Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © 2026 NEXORA. All rights reserved.
      </div>
    </footer>
  );
}
