import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function useDarkTheme() {
  const context = useContext(ThemeContext)
  return context
}