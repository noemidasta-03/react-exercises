import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useCounter } from "./useCounter";
import { useInput } from "./useInput";
import { useGithubuser } from "./useGithubUser";
import { LoginForm } from "./LoginForm";
import { useCurrentLocation } from "./useCurrentLocation";

function App() {
  const { count, increment } = useCounter(0);

  const [username, setUsername] = useState("");

  const { user, error, loading, updateGitHubUser } = useGithubuser();
  const { positionError, positionLoading, position, getCurrentPosition } =
    useCurrentLocation();

  useEffect(() => {
    if (username) {
      updateGitHubUser(username);
    }
  }, [username]);

  return (
    <>
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <button onClick={increment}>count is {count}</button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {user && (
          <div>
            <h2>{user?.name}</h2>
            <p>Username: {user?.login}</p>
            <img src={user?.avatar_url} />
          </div>
        )}
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <LoginForm />
      <div>
        {!positionLoading &&
          !positionError &&
          " latitude : " + position?.latitude}
        {!positionLoading &&
          !positionError &&
          " longitude : " + position?.longitude}

        {positionLoading && <p>...Loading</p>}
        {positionError && <p>{positionError.message}</p>}
        <button onClick={getCurrentPosition}>aggiorna</button>
      </div>
    </>
  );
}

export default App;
