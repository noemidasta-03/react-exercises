import { useState } from "react";
import Welcome from "./Welcome";

export default function IntercativeWelcome() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="inserisci il tuo nome"
        value={name}
        onChange={handleChange}
      />
      {name && <Welcome name={name} />}
    </div>
  );
}
