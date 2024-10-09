export default function Age({ age }) {
  if (!age) {
    return null;
  }

  return <p>Your age is {age}</p>;
}
