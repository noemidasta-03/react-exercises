import Welcome from "./Welcome";
import { createRoot } from "react-dom/client";

createRoot(document.querySelector("#root")).render(
  <Welcome name="John" age={18} />
);
