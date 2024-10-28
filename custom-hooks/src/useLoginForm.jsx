import { useState } from "react";

export function useLoginForm(initialFormValue) {
  const [form, setForm] = useState(initialFormValue);

  function setUsername(event) {
    setForm({
      username: event.target.value,
      password: form.password,
    });
  }

  function setPassword(event) {
    setForm({
      username: form.username,
      password: event.target.value,
    });
  }

  return {
    form,
    setUsername,
    setPassword,
  };
}
