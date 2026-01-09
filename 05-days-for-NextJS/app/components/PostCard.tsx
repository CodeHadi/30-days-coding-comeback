'use client';

import Link from 'next/link';

interface PostCardProps {
  id: number;
  title: string;
  body: string;
}

export default function PostCard({ id, title, body }: PostCardProps) {
  return (
    <Link href={`/posts/${id}`}>
      <div className="p-4 border rounded-lg shadow hover:shadow-lg cursor-pointer transition">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <p className="text-gray-700">{body.slice(0, 60)}...</p>
      </div>
    </Link>
  );
}
