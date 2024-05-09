import React, { createContext, useState, useContext } from "react";

type Theme = {
  mode: "light" | "dark";
};

type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  handleChangeTheme: () => void;
};

type UserProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext({} as ThemeContextType);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: UserProviderProps) => {
  const [theme, setTheme] = useState<Theme>({ mode: "light" });

  const handleChangeTheme = (): void => {
    setTheme(
      document.documentElement.classList.toggle("dark")
        ? { mode: "dark" }
        : { mode: "light" }
    );
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
