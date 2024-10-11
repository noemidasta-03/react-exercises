import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

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
      <CounterDisplay count={counter} />
      <p>Hello,i'm the button {counter}</p>
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}

/* Quando si chiama la funzione "setter" per incrementare il contatore, il parametro dovrebbe essere una funzione o un valore immediato?Perché?
 
una funzione,in modo tale da assicurarci di lavorare sempre con il valore più aggiornato del contatore


*/
