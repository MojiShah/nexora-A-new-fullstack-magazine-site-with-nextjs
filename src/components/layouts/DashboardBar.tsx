import { dahboardMenuItems } from "@/data/dashboardMenuItems";
import Link from "next/link";

export default function DashboardBar() {
  return (
    <aside className="fixed right-0 top-0 hidden h-screen w-64 border-l border-white/10 bg-[#0b1020] p-6 md:block">
        <Link href="/" className="text-2xl font-bold text-violet-400">
          NEXORA ADMIN
        </Link>

        <nav className="mt-12 space-y-3">
          {dahboardMenuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-violet-500/10 hover:text-violet-400"
              >
                <Icon size={20} />
                {item.title}
              </Link>
            );
          })}
        </nav>
      </aside>
  )
}
