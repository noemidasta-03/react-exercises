import { createRoot } from "react-dom/client";

import AlertClock from "./AlertClock";

createRoot(document.querySelector("#root")).render(
  <AlertClock time={handleButtonClick} />
);

export function handleButtonClick() {
  const now = new Date();
  alert(`the current time is${now.toLocaleTimeString()}`);
}
