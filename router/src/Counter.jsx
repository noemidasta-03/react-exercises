import { useState } from "react";

import { Link, Outlet } from "react-router-dom";

export default function Counter({ init, increment }) {
  const [counter, setCounter] = useState(init);

  function handleCounterIncrement() {
    return setCounter(counter + increment);
  }

  function handleCounterDecrement() {
    return setCounter(counter - increment);
  }
  function handleCounterReset() {
    return setCounter(0);
  }

  return (
    <div>
      <p>Hello,i'm the button {counter}</p>
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}
