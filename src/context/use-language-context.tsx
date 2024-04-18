import { useContext } from "react";
import { LanguageContext } from "./language-context";

export function useLanguageContext() {
  return useContext(LanguageContext);
}
