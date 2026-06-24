import Link from "next/link";
import type { Route } from "next";

export default function Home() {
  const lessons: { href: Route; title: string; description: string }[] = [
    {
      href: "/basics",
      title: "1. Basics: Server Component",
      description: "Простой маршрут на серверном компоненте и разметка в App Router.",
    },
    {
      href: "/counter",
      title: "2. Client Component: Counter",
      description: "Интерактивность через useState и директиву use client.",
    },
    {
      href: "/fetch-demo",
      title: "3. Data Fetching",
      description: "Загрузка данных на сервере через fetch в page.tsx.",
    },
    {
      href: "/api/hello",
      title: "4. API Route",
      description: "Пример route handler в папке app/api.",
    },
  ];

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-6 py-12">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Next.js Учебный Проект</h1>
        <p className="text-zinc-600 dark:text-zinc-300">
          Этот проект создан как песочница для изучения Next.js App Router. Проходи
          уроки по порядку и меняй код под свои задачи.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        {lessons.map((lesson) => (
          <Link
            key={lesson.href}
            href={lesson.href}
            className="rounded-xl border border-zinc-200 p-5 transition hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            <h2 className="font-semibold">{lesson.title}</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {lesson.description}
            </p>
          </Link>
        ))}
      </section>

      <section className="rounded-xl bg-zinc-100 p-5 text-sm dark:bg-zinc-900">
        <h3 className="font-semibold">Быстрый старт</h3>
        <ol className="mt-3 list-inside list-decimal space-y-2 text-zinc-700 dark:text-zinc-300">
          <li>
            Запусти проект: <code>npm run dev</code>
          </li>
          <li>Открой любой урок и попробуй изменить код.</li>
          <li>
            После изменений проверь результат в браузере и в API:{" "}
            <code>/api/hello</code>.
          </li>
        </ol>
      </section>
    </main>
  );
}
