import { useState } from "react";

export default function Container({ title, children }) {
  const [collapsible, setCollapsible] = useState(false);
  function handlecollapsible() {
    setCollapsible((t) => !t);
    console.log("componente montato");
  }
  return (
    <div>
      <div>
        {title}
        <button onClick={handlecollapsible}>Toggle</button>
      </div>
      {collapsible && <div className="container">{children}</div>}
    </div>
  );
}
