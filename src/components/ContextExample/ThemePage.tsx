import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemePage() {
  const { theme } = useContext(ThemeContext);
  // const { theme } = useTheme();

  return (
    <div
      style={
        theme === "light"
          ? { backgroundColor: "#e9e9e9" }
          : { backgroundColor: "black" }
      }>
      <div style={{ minHeight: 600 }}>MyPage</div>
    </div>
  );
}
