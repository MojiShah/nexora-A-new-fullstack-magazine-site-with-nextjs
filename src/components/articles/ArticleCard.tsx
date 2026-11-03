import { Article } from "@/data/article";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ article }: { article: Article }) {
    return (
        <Link
            href={`/articles/${article.slug}`}
            className="group overflow-hidden rounded-3xl border border-white/10 
                    bg-surface transition duration-300 hover:-translate-y-2 hover:border-violet-500/50"
        >
            <div className="relative h-56 overflow-hidden">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-background to-transparent" />
                <span className="absolute bottom-4 right-4 rounded-full border border-white/10
                            bg-black/50 px-4 py-2 text-xs text-violet-300 backdrop-blur-md">
                    {article.category}
                </span>
            </div>

            <div className="p-6">
                <div className="flex justify-between text-xs text-slate-500">
                    <span>{article.author}</span>
                    <span>{article.readTime}</span>
                </div>

                <h3 className="mt-5 line-clamp-2 text-xl font-bold leading-9 transition group-hover:text-violet-400">
                    {article.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm leading-7 text-slate-400">
                    {article.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-sm">
                    <span className="text-violet-400">مطالعه مقاله</span>
                    <span className="text-slate-500">←</span>
                </div>
            </div>

        </Link>
    )
}
