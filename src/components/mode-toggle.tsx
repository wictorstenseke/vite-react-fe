import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { mode, setMode } = useTheme();

  const toggleMode = () => {
    // If system mode, determine current effective mode
    if (mode === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setMode(isDark ? "light" : "dark");
      return;
    }

    // Toggle between light and dark
    setMode(mode === "light" ? "dark" : "light");
  };

  const getIcon = () => {
    // Determine effective mode for icon display
    let isDark: boolean;
    if (mode === "system") {
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    } else {
      isDark = mode === "dark";
    }

    return isDark ? (
      <Moon className="h-[1.2rem] w-[1.2rem]" />
    ) : (
      <Sun className="h-[1.2rem] w-[1.2rem]" />
    );
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleMode}>
      {getIcon()}
      <span className="sr-only">Toggle light/dark mode</span>
    </Button>
  );
}
