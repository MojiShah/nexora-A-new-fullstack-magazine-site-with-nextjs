import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles } from "lucide-react";
import { featuredArticle } from "@/data/article";

export function Hero() {
  if (!featuredArticle) return null;

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 -top-40 h-125 w-125 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-100 w-100 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-28 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-3 text-sm text-violet-300">
            <Sparkles size={17} />
            آینده تکنولوژی اینجاست
          </div>

          <h1 className="mt-8 text-4xl font-bold leading-[1.7] md:text-6xl">
            دنیای آینده را
            <span className="block bg-linear-to-l from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              متفاوت ببین
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-9 text-slate-400">
            جدیدترین مقالات دنیای برنامه‌نویسی، هوش مصنوعی و
            تکنولوژی را در NEXORA دنبال کن و همیشه یک قدم جلوتر باش.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/articles"
              className="flex items-center gap-3 rounded-xl bg-violet-600 px-7 py-4 font-medium transition hover:bg-violet-500"
            >
              کشف مقالات
              <ArrowLeft size={19} />
            </Link>

            <Link
              href="/categories/ai"
              className="rounded-xl border border-white/10 px-7 py-4 text-slate-300 transition hover:bg-white/5"
            >
              دنیای هوش مصنوعی
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[40px] bg-linear-to-tr from-violet-600/30 to-cyan-500/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-surface p-3 shadow-2xl">
            <div className="relative h-95">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-4xl object-cover"
              />
            </div>

            <div className="absolute bottom-8 right-8 left-8 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-xl">
              <p className="text-xs text-violet-300">
                EDITOR'S CHOICE
              </p>

              <h3 className="mt-2 text-xl font-bold">
                {featuredArticle.title}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {featuredArticle.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}