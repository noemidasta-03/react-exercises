import { useState } from "react";
import { useEffect } from "react";

export default function GithubUser({ username }) {
  const [data, setData] = useState(null);

  async function getData() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
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
      <h2>API integration</h2>
      <p>Username: {username}</p>
      <p>Login: {data?.login}</p>
      <img src={data?.avatar_url} />
    </div>
  );
}
