import ArticleCard from "@/components/articles/ArticleCard";
import { articles } from "@/data/article";
import type { Metadata } from "next"

export const metadata : Metadata = {
  title: "همه مقالات",
  description: "تمام مقالات NEXORA در حوزه تکنولوژی",
};

export default function ArticlePage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">

        <div className="mb-14">
            <span className="text-sm text-violet-400">OUR KNOWLEDGE BASE</span>
            <h1 className="mt-4 text-4xl font-bold"> دنیای مقالات</h1>
            <p className="mt-4 text-slate-400"> دانش روز تکنولوژی را اینجا کشف کن.</p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

    </section>
  )
}
