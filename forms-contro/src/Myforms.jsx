import { useState } from "react";

function createData() {
  return {
    username: "",
    password: "",
    session: false,
  };
}

export default function MyForm() {
  const [data, setData] = useState(createData());

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleResetForm() {
    setData(createData());
  }
  return (
    <div>
      <h1>My Forms</h1>
      <input
        name="username"
        value={data.username}
        onChange={handleInputChange}
      />
      <input
        name="password"
        value={data.password}
        onChange={handleInputChange}
      />
      <input
        name="session"
        type="checkbox"
        checked={data.session}
        onChange={handleInputChange}
      />
      <button disabled={!data.username || !data.password}>Login</button>
      <button onClick={handleResetForm}>Reset</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
