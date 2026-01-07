"use client";

import { useState } from "react";

export default function ClientPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Press</button>
    </>
  );
}
