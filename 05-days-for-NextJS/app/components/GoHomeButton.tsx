'use client';

import { useRouter } from 'next/navigation';

export default function GoHomeButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/')}
      className="px-4 py-2 bg-blue-500 text-white rounded mt-5"
    >
      Go to Home
    </button>
  );
}
