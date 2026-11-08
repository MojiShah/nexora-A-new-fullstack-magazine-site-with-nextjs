import { stats } from "@/data/dashboardStats";

export default function DashboardPage() {
    return (
    <div>
      <div>
        <p className="text-sm text-violet-400">OVERVIEW</p>
        <h1 className="mt-3 text-3xl font-bold"> داشبورد مدیریت</h1>
        <p className="mt-3 text-slate-400"> به پنل مدیریت NEXORA خوش آمدی.</p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-white/10 bg-surface p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">{stat.title}</span>
                <Icon className="text-violet-400" size={22} />
              </div>
              <h2 className="mt-5 text-3xl font-bold">{stat.value}</h2>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}