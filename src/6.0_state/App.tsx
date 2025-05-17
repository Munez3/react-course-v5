import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(() => Math.floor(Math.random() * 100));

  return (
    <div>
      <div>
        Name: {name} <br />
        Counter: {counter}
      </div>

      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click me!
      </button>
    </div>
  );
}
