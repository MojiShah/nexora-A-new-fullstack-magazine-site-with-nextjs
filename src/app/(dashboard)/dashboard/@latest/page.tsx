import { articles } from "@/data/article";

export default function LatestArticlesPage() {
  return (
    <div className="rounded-2xl border border-white/10 bg-surface p-6">
      <h2 className="text-xl font-bold">آخرین مقالات</h2>

      <div className="mt-5 space-y-4">
        {articles.slice(0, 3).map((article) => (
          <div key={article.id} className="border-b border-white/10 pb-4">
            <p className="font-medium">{article.title}</p>
            <p className="mt-2 text-xs text-slate-500">{article.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}