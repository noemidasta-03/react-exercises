import { useState } from "react";

export function useInput() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function inputUsername(e) {
    setUsername(e.target.value);
  }
  function inputPassword(e) {
    setPassword(e.target.value);
  }

  return {
    username,
    password,
    inputUsername,
    inputPassword,
  };
}
