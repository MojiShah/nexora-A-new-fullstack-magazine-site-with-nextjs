import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { articles } from "@/data/article";


type Props = {
  params: Promise<{slug: string;}>;
};

export default async function ArticleModal({ params }: Props) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) 
    notFound();

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-surface">
        <Link href="/articles" className="absolute left-5 top-5 z-10 rounded-full bg-black/60 p-3 text-white">
          <X size={20} />
        </Link>

        <div className="relative h-72">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="p-8">
          <span className="text-sm text-violet-400">{article.category}</span>
          <h1 className="mt-5 text-3xl font-bold leading-relaxed">{article.title}</h1>
          <p className="mt-5 leading-9 text-slate-400">{article.description}</p>

          <Link href={`/articles/${article.slug}`} className="mt-8 inline-flex rounded-xl bg-violet-600 px-6 py-3">
            مطالعه کامل مقاله
          </Link>
        </div>
      </div>
    </div>
  );
}