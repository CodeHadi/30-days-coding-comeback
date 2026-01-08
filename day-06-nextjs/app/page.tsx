import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1>Day 6 – Next.js 🚀</h1>
      <Link href="/About">Go to About</Link>
      <Link href="/Client">Go to Client</Link>
      <Link href="/Go">Go to Go</Link>
    </main>
  );
}
