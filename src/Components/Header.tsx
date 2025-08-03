import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

const Header = () => {
  // Custom hook to access Theme Context
  const { theme, setTheme } = useTheme();

  return (
    // Fixed top header bar with custom background and text color from theme variables.
    <header
      className="fixed top-0 left-0 right-0 px-6 py-4 z-50 flex justify-between items-center"
      style={{
        backgroundColor: "var(--header-bg)",
        color: "var(--header-text)",
      }}
    >
      <h1 className="text-xl font-bold">Theme Switcher</h1>

      <nav className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
          className="border px-2 py-1 rounded outline-none"
          style={{
            backgroundColor: "var(--selector-bg)",
            color: "var(--header-text)",
          }}
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </nav>
    </header>
  );
};

export default Header;
