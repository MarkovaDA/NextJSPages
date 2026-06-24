type Post = {
  id: number;
  title: string;
};

async function getPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

  if (!response.ok) {
    throw new Error("Не удалось загрузить посты");
  }

  return response.json();
}

export default async function FetchDemoPage() {
  const posts = await getPosts();

  return (
    <main className="mx-auto w-full max-w-3xl space-y-6 px-6 py-10">
      <h1 className="text-3xl font-bold">Data Fetching</h1>
      <p className="text-zinc-600 dark:text-zinc-300">
        Этот список загружается на сервере через <code>fetch</code> в
        серверном компоненте.
      </p>

      <ul className="space-y-3">
        {posts.map((post) => (
          <li
            key={post.id}
            className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-800"
          >
            <span className="font-mono text-xs text-zinc-500">#{post.id}</span>
            <p className="mt-1">{post.title}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
