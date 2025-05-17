import { useState } from "react";

export default function Button() {
  const [index, setIndex] = useState(1);

  function handleClick() {
    setIndex(index + 1);
  }

  return (
    <>
      wartość index: {index}
      <button onClick={handleClick}>+ 1</button>;
    </>
  );
}
