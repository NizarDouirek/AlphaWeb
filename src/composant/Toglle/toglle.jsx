import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./toglle.css"; // Assure-toi que le chemin est bon !

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      className={`theme-toggle-button ${isDark ? "dark" : "light"}`}
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle dark mode"
    >
      {isDark ? <FaSun className="theme-icon" style={{ color: "blue" }} /> : <FaMoon className="theme-icon" style={{ color: "blue" }} />}
    </button>
  );
};

export default ThemeToggle;
