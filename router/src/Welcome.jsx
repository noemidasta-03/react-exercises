import { Link } from "react-router-dom";

export default function Welcome({ name }) {
  return (
    <div>
      <Link to="/">
        <p>
          Welcome, <strong>{name}</strong>!
        </p>
      </Link>
    </div>
  );
}
