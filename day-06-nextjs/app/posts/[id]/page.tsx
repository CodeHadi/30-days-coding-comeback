import GoHomeButton from '../../components/GoHomeButton';

interface PostPageProps {
  params: { id: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-3">{post.title}</h1>
      <p className="mb-5">{post.body}</p>

      <GoHomeButton />
    </div>
  );
}
