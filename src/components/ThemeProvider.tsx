import React, { useEffect, useState, useCallback, useMemo } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      if (typeof window === "undefined") return true;
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      // Default to dark mode
      return true;
    } catch (err) {
      // handle the exception (log) instead of swallowing it silently
      // eslint-disable-next-line no-console
      console.warn("Failed to read persisted theme:", err);
      return true;
    }
  });

  // stable toggle identity
  const toggle = useCallback(() => setDark((d) => !d), []);

  useEffect(() => {
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch (err) {
      // log errors when persisting theme
      // eslint-disable-next-line no-console
      console.warn("Failed to persist theme:", err);
    }

    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", dark);
    }
  }, [dark]);

  // memoize provider value so it doesn't change every render
  const value = useMemo(() => ({ dark, toggle }), [dark, toggle]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
