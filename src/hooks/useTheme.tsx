import React from "react";

type Theme = "light" | "dark";

const useTheme = () => {
  const [theme, setTheme] = React.useState<Theme>("light");

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = stored || (prefersDark ? "dark" : "light");
      setTheme(initial as Theme);
      document.documentElement.setAttribute("data-theme", initial);
    } catch (e) {
      console.error("Error setting theme:", e);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    } catch (e) {
      console.error("Error setting theme:", e);
    }
  };

  return { theme, toggleTheme };
};

export default useTheme;
