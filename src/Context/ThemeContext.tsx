import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// Allowed Theme Types
export type Theme = "theme1" | "theme2" | "theme3";

// defining interface to provide context to consumers
interface ThemeContextType { 
  theme: Theme; // current theme
  setTheme: (theme: Theme) => void; // function to switch theme
  isAnimating: boolean; // trigger animations during theme switch
}

// creating context initialy undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// provider component to wrap the entire app
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Get initial theme from localStorage (if any), or fall back to "theme1"
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "theme1"
  );

  // useState hook for updating ui animations when switching to other themes
  const [isAnimating, setIsAnimating] = useState(false);

  // function to switch theme and update ui animations
  useEffect(() => {
    // Apply theme as class on the <html> element
    document.documentElement.className = theme;

    // Save theme and animate switch
    localStorage.setItem("theme", theme);
    setIsAnimating(true); // start animation

    // stop animation after 300ms
    const timeout = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timeout);
  }, [theme]);

  // Provide Context to the rest app
  return (
    <ThemeContext.Provider value={{ theme, setTheme, isAnimating }}>
      {children}
    </ThemeContext.Provider>
  );
};

// custom hook to access theme context easily
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
