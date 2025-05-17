import { useState } from "react";

import { useRef } from "react";

export default function Component() {
  let nonRefValue = 0;
  const refValue = useRef(0);
  const [state, setState] = useState(true);

  function changeValues() {
    nonRefValue += 1;
    refValue.current += 1;
    setState(!state);
  }

  return (
    <div>
      Non ref: {nonRefValue} <br />
      Ref: {refValue.current} <br />
      State: {state ? "true" : "false"} <br />
      <button onClick={changeValues}>+1</button>
    </div>
  );
}
