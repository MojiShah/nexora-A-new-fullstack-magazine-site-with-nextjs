

interface ICategoryPageProps{
    params : Promise<{category:string}>
}

const categories: Record<string, string> = {
  ai: "هوش مصنوعی",
  programming: "برنامه‌نویسی",
  technology: "تکنولوژی",
};

