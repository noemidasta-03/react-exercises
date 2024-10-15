import { useState, useEffect } from "react";

export default function Counter({ initialValue = 0, incrementAmount = 1 }) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log(`Current counter value: ${counter}`);
  }, [counter]);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + incrementAmount);
  };

  useEffect(() => {
    console.log("componente montato");
    return () => {
      console.log("componente smontato");
    };
  }, []);

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
