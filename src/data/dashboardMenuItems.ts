import { FileText, LayoutDashboard, Settings, Users } from "lucide-react";

export const dahboardMenuItems = [
  {
    title: "داشبورد",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "مدیریت مقالات",
    href: "/dashboard/articles",
    icon: FileText,
  },
  {
    title: "نویسندگان",
    href: "/dashboard/authors",
    icon: Users,
  },
  {
    title: "تنظیمات",
    href: "/dashboard/settings",
    icon: Settings,
  },
];