import React, { ReactNode } from "react";
import { useTheme } from "../Context/ThemeContext";
import SidebarLayout from "./SidebarLayout";

// Interface for theme wrapper props
interface ThemeWrapperProps {
  children: ReactNode;
}
// wrapper component to apply current theme & conditionally Adds Extra sidebar in Theme 2 Selection
const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  // accessing current theme from themecontext
  const { theme } = useTheme();

  return (
     // Apply the theme class (theme1, theme2, theme3) to the outer div
    // This enables CSS variables and global styling
    <div className={theme}>
       {/* If the selected theme is "theme2", render content with sidebar layout */}
      {theme === "theme2" ? (
        <SidebarLayout>{children}</SidebarLayout>
      ) : (
        // If the selected theme is not "theme2", render content without sidebar layout
        <main className="pt-20 p-4 bg-[var(--bg)] text-[var(--text)] min-h-screen transition-all duration-300">
          {children}
        </main>
      )}
    </div>
  );
};

export default ThemeWrapper;
