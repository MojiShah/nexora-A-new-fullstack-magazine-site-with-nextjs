import ArticleCard from "@/components/articles/ArticleCard";
import { articles } from "@/data/article"
import { notFound } from "next/navigation";


interface IAuthorPageProps {
    params: Promise<{ username: string }>
}

export async function generateMetaData({ params }: IAuthorPageProps) {
    const { username } = await params
    const author = articles.find(article => article.authorUsername === username)

    return { title: author?.author ?? "نویسنده پیدا نشد", };
}

export default async function AuthorPage({ params }: IAuthorPageProps) {
    const { username } = await params
    const authorArticles = articles.filter(article => article.authorUsername === username)
    const author = authorArticles[0];
    if (!author)
        notFound();

    return (
        <section className="mx-auto max-w-7xl px-5 py-20">

            <div className="rounded-3xl border border-white/10 bg-surface p-8">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-600 text-3xl font-bold">
                    {author.author.charAt(0)}
                </div>

                <h1 className="mt-6 text-3xl font-bold">{author.author}</h1>
                <p className="mt-3 text-slate-400"> نویسنده NEXORA</p>
                <p className="mt-2 text-sm text-slate-500">{authorArticles.length} مقاله منتشرشده</p>
            </div>

            <h2 className="mt-14 text-2xl font-bold"> مقالات نویسنده</h2>

            <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                {authorArticles.map((article) => (<ArticleCard key={article.id} article={article} />))}
            </div>
        </section>
    )
}