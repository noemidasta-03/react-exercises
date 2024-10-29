import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useCounter } from "./useCounter";
import FilteredList from "./FilteredList";

function App() {
  const { count, increment, decrement, reset } = useCounter(0);

  const items = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 17 },
    { id: 3, name: "Charlie", age: 20 },
    { id: 4, name: "David", age: 15 },
    { id: 5, name: "Eve", age: 30 },
  ];

  return (
    <>
      <div>
        <h1>Elenco Filtrato</h1>
        <FilteredList items={items} />
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>Contatore: {count}</h1>
        <button onClick={increment}>Incrementa</button>
        <button onClick={decrement}>Decrement </button>
        <button onClick={reset}>reset</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div></div>
    </>
  );
}

export default App;
