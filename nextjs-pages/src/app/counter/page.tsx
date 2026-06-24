import { Counter } from "@/components/Counter";

export default function CounterPage() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-6 px-6 py-10">
      <h1 className="text-3xl font-bold">Client Component: Counter</h1>
      
      <p className="text-zinc-600 dark:text-zinc-300">
        Ниже пример клиентского компонента. Он использует <code>useState</code> и
        работает в браузере.
      </p>

      <Counter />
    
    </main>
  );
}
