import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

// ThemeProvider 컴포넌트
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // 초기 테마는 light

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
