export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl animate-pulse px-5 py-16">
      <div className="h-5 w-32 rounded bg-white/10" />

      <div className="mt-10 h-12 w-4/5 rounded-xl bg-white/10" />

      <div className="mt-5 h-5 w-2/3 rounded bg-white/10" />

      <div className="mt-10 h-100 rounded-3xl bg-white/10" />

      <div className="mt-12 space-y-4">
        <div className="h-5 rounded bg-white/10" />
        <div className="h-5 rounded bg-white/10" />
        <div className="h-5 w-3/4 rounded bg-white/10" />
      </div>
    </div>
  );
}