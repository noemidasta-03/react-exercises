export default function UncontrolledLogin() {
  function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    const session = form.session.checked;

    console.log("username", username);
    console.log("password", password);
    console.log("session", session);
  }

  const loginWithFromData = (event) => {
    event.preventDefault();

    const form = event.target.form;
    const fromData = new FormData(form);

    const username = fromData.get("username");
    const password = fromData.get("password");
    const session = fromData.get("session") == "on";

    console.log("username", username);
    console.log("password", password);
    console.log("session", session);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input name="username" />
      <input name="password" type="password" />
      <input name="session" type="checkbox" />
      <button type="submit">Login</button>
      <button type="button" onClick={loginWithFromData}>
        Login with from data
      </button>
    </form>
  );
}
