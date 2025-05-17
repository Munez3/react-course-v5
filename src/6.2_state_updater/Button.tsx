import { useState } from "react";

export default function Counter() {
  let [index, setIndex] = useState(0);
  let localIndex = 0;
  console.log("render");
  return (
    <>
      <div>StateIndex: {index}</div>
      <div>LocalIndex: {localIndex}</div>
      <button
        onClick={() => {
          localIndex + 3;
          setIndex(index + 1);
          setIndex(index + 1);
          setIndex(index + 1);
        }}
      >
        +3 new value
      </button>
      <button
        onClick={() => {
          console.log("index", index);

          index = index + 3;
        }}
      >
        +3 mutate
      </button>
      <button
        onClick={() => {
          setIndex((n) => n + 1);
          setIndex((n) => n + 1);
          setIndex((n) => n + 1);
        }}
      >
        +3 updater
      </button>
    </>
  );
}
