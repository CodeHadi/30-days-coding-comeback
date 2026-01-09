// app/posts/page.tsx
interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function PostsPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' }); 
  const posts: Post[] = await res.json();

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Posts</h1>
      <ul>
        {posts.slice(0, 5).map(post => (
          <li key={post.id} className="mb-3 border p-3 rounded shadow">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
