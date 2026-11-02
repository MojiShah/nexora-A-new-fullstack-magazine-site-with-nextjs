import Link from "next/link";
import { Search, Sparkles } from "lucide-react";

const navlinks = [
  { title: "خانه", href: "/" },
  { title: "مقالات", href: "/articles" },
  { title: "هوش مصنوعی", href: "/categories/ai" },
  { title: "برنامه‌نویسی", href: "/categories/programming" },
];

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-[#080b14]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">

        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-xl bg-violet-600 p-2">
            <Sparkles size={22} />
          </div>

          <span className="text-2xl font-bold tracking-tight">NEXORA</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
            {navlinks.map(navlink => 
                <Link key={navlink.href} href={navlink.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                >
                    {navlink.title}
                </Link>)}
        </div>

        <button
          aria-label="جستجو"
          className="rounded-xl border border-white/10 bg-white/5 p-3 
            transition hover:bg-violet-600"
        >
          <Search size={19} />
        </button>
      </nav>
    </header>
  );
}
