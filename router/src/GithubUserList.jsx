import { useEffect } from "react";
import { useState } from "react";

import { Link, Outlet } from "react-router-dom";

export default function GithubUserList() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await fetch(`https://api.github.com/users`);
      const data = await response.json();
      console.log("data", data);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((user, i) => {
        return (
          <div key={i}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </div>
        );
      })}
      <Outlet />
    </div>
  );
}
