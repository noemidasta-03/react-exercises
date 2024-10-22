import { useEffect, useRef } from "react";

export default function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("componente Montato");
    inputRef.current?.focus();
  }, []);

  return (
    <form>
      <input ref={inputRef} />
    </form>
  );
}
