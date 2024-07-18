import React, { useEffect, useState } from "react";
export default function DemoUseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("UseEffect called");
  });
  return (
    <div>
      <h1>UseEffect Hook in React</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>UpdateCount</button>
    </div>
  );
}
