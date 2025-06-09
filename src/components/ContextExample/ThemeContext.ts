import { createContext } from "react";

// 테마 컨텍스트 생성
export const ThemeContext = createContext({
  // 기본값 설정
  theme: "light",
  toggleTheme: () => {},
});
