import LikeButton from "@/components/articles/LikeButton";
import { getArticle } from "@/utils/getArticle";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface IArticleDetailPageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: IArticleDetailPageProps): Promise<Metadata> {
    "use cache";
    const { slug } = await params;
    const article = await getArticle(slug);

    if (!article)
        return { title: "مقاله پیدا نشد" };

    return {
        title: article.title,
        description: article.description,
        openGraph: {
            title: article.title,
            description: article.description,
            images: [article.image],
        }
    }

}

export default async function ArticleDetailPage({ params }: IArticleDetailPageProps) {
    const { slug } = await params;
    const article = await getArticle(slug);

    if (!article)
        return notFound()

    return (
        <article className="mx-auto max-w-5xl px-5 py-16">
            <Link href='/articles' className="text-sm text-violet-400 hover:text-violet-300"> ← بازگشت به مقالات</Link>
            <div className="mt-10">
                <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
                    {article.category}
                </span>
                <h1 className="mt-8 text-3xl font-bold leading-[1.8] md:text-5xl">
                    {article.title}
                </h1>
                <p className="mt-6 text-lg leading-9 text-slate-400">
                    {article.description}
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-y border-white/10 py-6">
                    <div>
                        <p className="font-medium">{article.author}</p>
                        <p className="mt-1 text-sm text-slate-500">
                            نویسنده NEXORA
                        </p>
                    </div>
                    <div className="text-sm text-slate-400">
                        {article.readTime} مطالعه
                    </div>
                    <LikeButton />
                </div>
            </div>
            <div className="relative mt-12 h-75 overflow-hidden rounded-3xl md:h-125">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 960px"
                    className="object-cover"
                />
            </div>
            <div className="mt-14 max-w-none">
                <h2 className="text-2xl font-bold">مقدمه</h2>
                <p className="mt-5 leading-10 text-slate-300">
                    تکنولوژی در حال تغییر دنیای ماست. از هوش مصنوعی
                    گرفته تا ابزارهای توسعه نرم‌افزار، هر روز شاهد
                    تحولات جدیدی هستیم که آینده زندگی و کسب‌وکار ما را
                    شکل می‌دهند.
                </p>
                <h2 className="mt-12 text-2xl font-bold">
                    چرا این موضوع اهمیت دارد؟
                </h2>
                <p className="mt-5 leading-10 text-slate-300">
                    درک تکنولوژی‌های جدید به توسعه‌دهندگان کمک می‌کند
                    تا تصمیمات بهتری بگیرند و محصولات قدرتمندتری بسازند.
                </p>
            </div>
        </article>
    )
}