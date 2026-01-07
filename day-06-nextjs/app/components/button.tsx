export default function Button({ text }: { text: string }) {
  return (
    <button className="px-4 py-2 bg-black text-white rounded">
      {text}
    </button>
  );
}
