import { createContext, useContext, useEffect, useState } from "react";

type ThemeName = "default" | "dark-matter" | "neo-brutalism";
type Mode = "light" | "dark" | "system";

const VALID_THEMES: ThemeName[] = ["default", "dark-matter", "neo-brutalism"];
const VALID_MODES: Mode[] = ["light", "dark", "system"];

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
  const [theme, setTheme] = useState<ThemeName>(() => {
    const stored = localStorage.getItem(`${storageKey}-name`);
    return VALID_THEMES.includes(stored as ThemeName) ? (stored as ThemeName) : defaultTheme;
  });
  const [mode, setMode] = useState<Mode>(() => {
    const stored = localStorage.getItem(`${storageKey}-mode`);
    return VALID_MODES.includes(stored as Mode) ? (stored as Mode) : defaultMode;
  });

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
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      actualMode = mediaQuery.matches ? "dark" : "light";
      
      // Listen for system theme changes
      const handleChange = (e: MediaQueryListEvent) => {
        root.classList.remove("light", "dark");
        root.classList.add(e.matches ? "dark" : "light");
      };
      
      mediaQuery.addEventListener("change", handleChange);
      
      // Cleanup listener on unmount or when mode changes
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
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
