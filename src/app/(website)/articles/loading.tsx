export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl animate-pulse px-5 py-16">
      <div className="h-5 w-32 rounded bg-white/10" />

      <div className="mt-8 h-12 w-3/4 rounded-xl bg-white/10" />

      <div className="mt-4 h-5 w-1/2 rounded bg-white/10" />

      <div className="mt-10 h-105 rounded-3xl bg-white/10" />

      <div className="mt-10 space-y-4">
        <div className="h-5 rounded bg-white/10" />
        <div className="h-5 rounded bg-white/10" />
        <div className="h-5 w-2/3 rounded bg-white/10" />
      </div>
    </div>
  );
}