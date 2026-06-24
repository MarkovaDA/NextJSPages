export default function BasicsPage() {
  const now = new Date().toLocaleString("ru-RU");

  return (
    <main className="mx-auto w-full max-w-3xl space-y-6 px-6 py-10">
      <h1 className="text-3xl font-bold">Basics: Server Component</h1>
      <p className="text-zinc-600 dark:text-zinc-300">
        Эта страница рендерится на сервере. Здесь можно писать обычный асинхронный
        код и сразу получать готовый HTML.
      </p>

      <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
        <p className="font-medium">Текущее время сервера:</p>
        <p className="mt-2 font-mono">{now}</p>
      </div>
    </main>
  );
}
