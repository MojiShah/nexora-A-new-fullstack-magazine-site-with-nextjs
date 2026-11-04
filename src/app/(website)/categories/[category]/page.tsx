import ArticleCard from "@/components/articles/ArticleCard";
import { articles } from "@/data/article";
import { notFound } from "next/navigation";


interface ICategoryPageProps {
    params: Promise<{ category: string }>
}

const categories: Record<string, string> = {
    ai: "هوش مصنوعی",
    programming: "برنامه‌نویسی",
    technology: "تکنولوژی",
};

export async function generateMetadata({ params }: ICategoryPageProps) {
    const { category } = await params;
    const categoryName = categories[category];

    if (!categoryName)
        return { title: "دسته‌بندی پیدا نشد", };

    return {
        title: categoryName,
        description: `مقالات دسته ${categoryName} در NEXORA`,
    };
}

export default async function CategoryPage({ params }: ICategoryPageProps) {
    const { category } = await params;
    const categoryName = categories[category];

    if (!categoryName)
        return notFound()

    const categoryArticles = articles.filter(article => article.categorySlug === category)

    return (
        <section className="mx-auto max-w-7xl px-5 py-20">
            <span className="text-sm text-violet-400">CATEGORY</span>

            <h1 className="mt-4 text-4xl font-bold">{categoryName}</h1>

            <p className="mt-4 text-slate-400">مقالات تخصصی دسته {categoryName}</p>

            <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                {categoryArticles.map((article) => (<ArticleCard key={article.id} article={article} />))}
            </div>

            {categoryArticles.length === 0 && (
                <p className="mt-12 text-slate-400">
                    هنوز مقاله‌ای در این دسته‌بندی منتشر نشده است.
                </p>
            )}
        </section>
    )
}