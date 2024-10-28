import { useLoginForm } from "./useLoginForm";

export function LoginForm() {
  const { form, setUsername, setPassword } = useLoginForm({
    username: "",
    password: "",
  });

  function submit(event) {
    event.preventDefault();
    console.log(form);
  }
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        name="username"
        value={form.username}
        onChange={setUsername}
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={setPassword}
      />
      <button type="submit">Login</button>
    </form>
  );
}
