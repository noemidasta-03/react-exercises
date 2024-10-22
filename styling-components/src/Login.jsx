import { useState } from "react";
export default function LogIn({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleRememberMeChange(event) {
    setRememberMe(event.target.checked);
  }

  function handleReset() {
    setUsername("");
    setPassword("");
    setRememberMe(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onLogin({ username, password, rememberMe });
  }

  const isLoginButtonDisalbled = !username || !password;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          Remember me
        </label>
      </div>
      <button
        className={password.length < 8 ? "red" : "green"}
        type="submit"
        disabled={isLoginButtonDisalbled}
      >
        Login
      </button>

      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

/*Come si impedisce il comportamento predefinito dell'elemento form?
utilizzando il preventDefault */
