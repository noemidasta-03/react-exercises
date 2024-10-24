import { useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUsers() {
  const [username, setUsername] = useState("");
  const [usernamesList, setUsernamesList] = useState([]);
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setUsernamesList([...usernamesList, username]);
          setUsername("");
        }}
      >
        Invio
      </button>
      <ul>
        {usernamesList.map((user, i) => {
          return (
            <li key={i}>
              <GithubUser username={user} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
