
interface IInnerDashboardLayoutProps{
  children: React.ReactNode;
  analytics: React.ReactNode;
  latest: React.ReactNode;
}

export default function InnerDashboardLayout({children,analytics,latest,}: IInnerDashboardLayoutProps) {
  return (
    <div className="space-y-6">
      {children}

      <div className="grid gap-5 lg:grid-cols-2">
        {analytics}
        {latest}
      </div>
    </div>
  );
}