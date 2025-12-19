import { Palette } from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const themes = [
  { name: "default", label: "Default" },
  { name: "dark-matter", label: "Dark Matter" },
  { name: "neo-brutalism", label: "Neo Brutalism" },
] as const;

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <DropdownMenu>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Palette className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Select theme</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Change theme</p>
          </TooltipContent>
          <DropdownMenuContent align="end">
            {themes.map((themeOption) => (
              <DropdownMenuItem
                key={themeOption.name}
                onClick={() => setTheme(themeOption.name)}
                className={theme === themeOption.name ? "bg-accent" : ""}
              >
                {themeOption.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </Tooltip>
    </TooltipProvider>
  );
}
