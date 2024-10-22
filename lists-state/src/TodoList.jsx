import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addTodo() {
    setTodos([...todos, inputValue]);
    setInputValue("");
  }
  function reset() {
    setTodos([]);
  }

  function remove(elementToRemove) {
    setTodos(todos.filter((todo) => todo !== elementToRemove));
  }
  return (
    <div>
      <ul>
        {todos.map((todo, i) => {
          return (
            <li key={i}>
              {todo}
              <button onClick={() => remove(todo)}>Remove</button>
            </li>
          );
        })}
      </ul>

      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
