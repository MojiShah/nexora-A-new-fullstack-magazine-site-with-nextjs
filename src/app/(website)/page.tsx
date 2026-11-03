import ArticleCard from "@/components/articles/ArticleCard";
import { Hero } from "@/components/shared/Hero";
import { articles } from "@/data/article";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <Hero />
            <section className="mx-auto max-w-7xl px-5 py-20">

                <div className="mb-12 flex items-end justify-between">
                    <div>
                        <span className="text-sm text-violet-400">LATEST STORIES</span>
                        <h2 className="mt-3 text-3xl font-bold">جدیدترین مقالات</h2>
                    </div>
                    <Link href="/articles" className="hidden items-center gap-2 text-sm text-violet-400 md:flex">
                        مشاهده همه
                        <ArrowLeft size={18} />
                    </Link>
                </div>
                <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map(article => <ArticleCard key={article.id} article={article} /> )}
                </div>
            </section>
        </>
    )
}