import { articles } from "@/data/article";

export async function getArticle(slug:string) {
    return articles.find(article=>article.slug === slug);
}