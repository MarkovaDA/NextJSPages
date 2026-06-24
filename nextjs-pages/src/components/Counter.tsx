"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-4 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
      <p className="text-lg">
        Счетчик: <span className="font-bold">{count}</span>
      </p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setCount((value) => value - 1)}
          className="rounded-md border border-zinc-300 px-3 py-1 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
        >
          -1
        </button>
        <button
          type="button"
          onClick={() => setCount((value) => value + 1)}
          className="rounded-md bg-black px-3 py-1 text-sm text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-300"
        >
          +1
        </button>
      </div>
    </div>
  );
}
