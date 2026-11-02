"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface IErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({error,reset,}: IErrorPageProps) {

  useEffect(() => console.error(error), [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <AlertTriangle size={55} className="text-red-400" />

      <h1 className="mt-6 text-3xl font-bold">مشکلی پیش آمده!</h1>

      <p className="mt-3 text-slate-400">
        در بارگذاری این بخش خطایی رخ داده است.
      </p>

      <button onClick={reset} className="mt-8 flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3">
        <RefreshCw size={18} />
        تلاش مجدد
      </button>
    </div>
  );
}
