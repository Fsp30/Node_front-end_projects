import { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import lightTheme from "./light";
import darkTheme from "./dark";

export const ThemeContext = createContext()
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }
  return (
    <ThemeContext.Provider value={{toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}