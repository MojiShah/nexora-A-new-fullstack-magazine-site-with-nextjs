
interface ISearchPageProps {
    params: Promise<{ terms: string[] }>
}

export default async function SearchPage({ params }: ISearchPageProps) {
    const { terms } = await params;
    return (
        <div className="mx-auto max-w-7xl px-5 py-20">
            <h1 className="text-3xl font-bold"> نتایج جستجو</h1>

            <p className="mt-5 text-slate-400">{terms.join(" / ")}</p>
        </div>
    )
}