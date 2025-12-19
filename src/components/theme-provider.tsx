import { createContext, useContext, useEffect, useState } from "react";

type ThemeName = "default" | "dark-matter" | "neo-brutalism";
type Mode = "light" | "dark" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ThemeName;
  defaultMode?: Mode;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: ThemeName;
  mode: Mode;
  setTheme: (theme: ThemeName) => void;
  setMode: (mode: Mode) => void;
};

const initialState: ThemeProviderState = {
  theme: "default",
  mode: "system",
  setTheme: () => null,
  setMode: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "default",
  defaultMode = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeName>(
    () =>
      (localStorage.getItem(`${storageKey}-name`) as ThemeName) || defaultTheme
  );
  const [mode, setMode] = useState<Mode>(
    () => (localStorage.getItem(`${storageKey}-mode`) as Mode) || defaultMode
  );

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove all theme classes
    root.classList.remove(
      "light",
      "dark",
      "theme-dark-matter",
      "theme-neo-brutalism"
    );

    // Apply theme class
    if (theme === "dark-matter") {
      root.classList.add("theme-dark-matter");
    } else if (theme === "neo-brutalism") {
      root.classList.add("theme-neo-brutalism");
    }

    // Determine actual mode
    let actualMode: "light" | "dark";
    if (mode === "system") {
      actualMode = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } else {
      actualMode = mode;
    }

    // Apply mode class
    root.classList.add(actualMode);
  }, [theme, mode]);

  const value = {
    theme,
    mode,
    setTheme: (newTheme: ThemeName) => {
      localStorage.setItem(`${storageKey}-name`, newTheme);
      setTheme(newTheme);
    },
    setMode: (newMode: Mode) => {
      localStorage.setItem(`${storageKey}-mode`, newMode);
      setMode(newMode);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
