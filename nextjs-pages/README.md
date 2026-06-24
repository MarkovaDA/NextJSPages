# Next.js Training Project

Учебный проект на `Next.js` (App Router) для практики основных тем:

- роутинг в `app/`
- `Server Components` и `Client Components`
- API route handlers (`app/api`)
- загрузка данных через `fetch`

## Запуск

```bash
npm install
npm run dev
```

Открой `http://localhost:3000`.

## Что изучать по шагам

1. Главная страница: `src/app/page.tsx`  
   Навигация по урокам и базовая структура проекта.
2. Server Component: `src/app/basics/page.tsx`  
   Рендеринг на сервере.
3. Client Component: `src/app/counter/page.tsx` + `src/components/Counter.tsx`  
   Состояние и интерактивность в браузере.
4. Data Fetching: `src/app/fetch-demo/page.tsx`  
   Серверный `fetch` с `cache: "no-store"`.
5. API Route: `src/app/api/hello/route.ts`  
   Собственный JSON endpoint.

## Практические задания

- Добавь страницу `src/app/users/page.tsx` и выведи список пользователей из API.
- Сделай форму добавления заметки в клиентском компоненте.
- Добавь динамический маршрут `src/app/posts/[id]/page.tsx`.
- Попробуй добавить loading/error UI (`loading.tsx`, `error.tsx`) для одной из страниц.

## Полезные ссылки

- [Next.js Docs](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
