import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">

      <div className="rounded-3xl bg-violet-500/10 p-7">
        <FileQuestion size={60} className="text-violet-400" />
      </div>

      <h1 className="mt-8 text-6xl font-bold">404</h1>

      <h2 className="mt-4 text-2xl font-bold">
        این صفحه در دنیای NEXORA وجود ندارد!
      </h2>

      <p className="mt-3 text-slate-400">
        شاید مقاله حذف شده یا آدرس را اشتباه وارد کرده‌ای.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-violet-600 px-8 py-3 font-medium transition hover:bg-violet-500"
      >
        بازگشت به خانه
      </Link>

    </div>
  );
}