export default function DashboardLayout({children,}: {children: React.ReactNode;}) {
  return (
    <div dir="rtl" className="min-h-screen bg-slate-950">

      <aside className="fixed right-0 top-0 h-screen w-64 border-l border-white/10 p-6">
        <h2 className="text-xl font-bold text-violet-400">NEXORA ADMIN</h2>

        <nav className="mt-10 space-y-5 text-slate-400">
          <p>داشبورد</p>
          <p>مدیریت مقالات</p>
          <p>نویسندگان</p>
        </nav>
      </aside>

      <main className="mr-64 p-10">
        {children}
      </main>

    </div>
  );
}