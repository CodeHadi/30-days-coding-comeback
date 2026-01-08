"use client";

import { useRouter } from "next/navigation";

export default function GoPage() {
  const router = useRouter();

  return (
    <div className="text-center mt-10">
      <button
        onClick={() => router.push("/")}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Go Home
      </button>
    </div>
  );
}
