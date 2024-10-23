import { useContext } from "react";
import { LanguageContext } from "./App";

export default function Hello() {
  const language = useContext(LanguageContext);

  return <h2> {language == "italiano" ? "Ciao ,Mondo!" : "Hello,World!"}</h2>;
}
