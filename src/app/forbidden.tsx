export default function Forbidden() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-7xl font-bold text-red-500">403</h1>

      <h2 className="mt-5 text-2xl font-bold">
        دسترسی غیرمجاز
      </h2>

      <p className="mt-3 text-slate-400">
        شما اجازه دسترسی به این بخش را ندارید.
      </p>
    </div>
  );
}