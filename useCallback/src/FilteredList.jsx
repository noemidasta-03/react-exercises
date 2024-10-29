import { useMemo } from "react";

export default function ({ items }) {
  const filteredItems = useMemo(() => {
    return items.filter((item) => item.age > 18);
  }, [items]);

  return (
    <ul>
      {filteredItems.map((item) => (
        <li key={item.id}>
          {item.name}(età:{item.age})
        </li>
      ))}
    </ul>
  );
}
