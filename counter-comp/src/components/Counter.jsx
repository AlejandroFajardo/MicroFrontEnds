import { useState } from "react";

export const Counter = () => {
  const [counterState, setCounterState] = useState(0);

  const changeCounterState  = () => {
    setCounterState(counterState + 1);
  };

  return (
    <>
      <h1> This is the counter</h1>
      <button onClick={changeCounterState}> Button for +1</button>
      <h2>{counterState}</h2>
    </>
  );
}
