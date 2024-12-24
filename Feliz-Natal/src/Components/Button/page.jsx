import { useState, useEffect } from "react";
import { AiFillSun, AiFillMoon } from "react-icons/ai";

const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <button
      className="buttonColor"
      id="theme-toggle-btn"
      onClick={toggleTheme}
      role="button"
    >
      {isDarkMode ? (
        <section className="luz">
          <AiFillMoon />
        </section>
      ) : (
        <section className="lua">
          <AiFillSun />
        </section>
      )}
    </button>
  );
};

export default ThemeToggleButton;
