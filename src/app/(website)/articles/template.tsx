
export default function ArticlesTemplate({children,}: {children: React.ReactNode;}) {
  return (
    <div className="animate-in fade-in duration-500">
      {children}
    </div>
  );
}