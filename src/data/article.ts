export type Article = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  author: string;
  authorUsername: string;
  readTime: string;
  date: string;
  image: string;
  featured: boolean;
};

export const articles: Article[] = [
  {
    id: 1,
    slug: "future-of-ai",
    title: "آینده هوش مصنوعی؛ دنیایی فراتر از تصور",
    description:
      "نگاهی عمیق به تحول هوش مصنوعی و تأثیر آن بر آینده تکنولوژی.",
    category: "هوش مصنوعی",
    categorySlug: "ai",
    author: "علی محمدی",
    authorUsername: "ali",
    readTime: "۸ دقیقه",
    date: "۱۴۰۵/۰۸/۰۱",
    image:"/images/articles/Ai-banner.jpg",
    featured: true,
  },
  {
    id: 2,
    slug: "nextjs-guide",
    title: "چرا Next.js انتخاب اول توسعه‌دهندگان مدرن است؟",
    description:
      "بررسی قابلیت‌های Next.js و معماری مدرن توسعه وب.",
    category: "برنامه‌نویسی",
    categorySlug: "programming",
    author: "سارا احمدی",
    authorUsername: "sara",
    readTime: "۶ دقیقه",
    date: "۱۴۰۵/۰۷/۲۸",
    image:"/images/articles/electronic-devices-02.jpg",
    featured: false,
},
{
    id: 3,
    slug: "future-of-web",
    title: "آینده توسعه وب در عصر ابزارهای هوشمند",
    description:
    "چطور ابزارهای هوش مصنوعی روش ساخت وب‌سایت‌ها را تغییر می‌دهند؟",
    category: "تکنولوژی",
    categorySlug: "technology",
    author: "رضا کریمی",
    authorUsername: "reza",
    readTime: "۵ دقیقه",
    date: "۱۴۰۵/۰۷/۲۵",
    image:"/images/articles/electronic-devices-01.jpg",
    featured: false,
  },
];

export const featuredArticle = articles.find(article => article.featured);