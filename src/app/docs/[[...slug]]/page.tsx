
interface IDocsPageProps{
    params : Promise <{slug?:string[]}>
}

export default async function DocsPage({ params }: IDocsPageProps) {
    const {slug} = await params;
     return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <h1 className="text-3xl font-bold">مستندات NEXORA</h1>

      <p className="mt-5 text-slate-400">
        {slug?.join(" / ") ?? "صفحه اصلی مستندات"}
      </p>
    </div>
  );
}