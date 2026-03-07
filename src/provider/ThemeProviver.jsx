import { use, useEffect, useState } from "react";
import { ThemeContext } from "../context";
const Themes = ["light", "dark"];
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const handleTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme]);

  return (
    <ThemeContext value={{ handleTheme, theme, Themes }}>
      {children}
    </ThemeContext>
  );
};

export const useTheme = () => use(ThemeContext);

export default ThemeProvider;
