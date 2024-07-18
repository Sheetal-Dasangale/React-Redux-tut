import React from "react";
import { useState } from "react";
export default function DemoHook() {
  const [name, setName] = useState("Sheetal");
  const [count, setCount] = useState(0);
  const [countt, setCountt] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setName("Shravani");
        }}
      >
        ChangeName
      </button>
      <p>Name : {name}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        IncrementCount
      </button>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCountt(countt - 1);
        }}
      >
        DecrementCount
      </button>
      <p>Count: {countt}</p>
    </div>
  );
}
