'use client'; 

import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 10)); 
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="p-5 text-center text-xl font-bold">Loading Blog Posts...</p>;

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Mini Blog Explorer</h1>

      <div className="mb-10">
        <input
          type="text"
          placeholder="Search by title... (e.g. 'sunt')"
          className="w-full p-4 border border-gray-300 rounded-xl shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <p className="mt-2 text-sm text-gray-500">
          Showing {filteredPosts.length} posts
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
          ))
        ) : (
          <div className="col-span-2 text-center py-10">
            <p className="text-red-500 font-semibold text-lg">Oops! No posts found.</p>
          </div>
        )}
      </div>
    </div>
  );
}