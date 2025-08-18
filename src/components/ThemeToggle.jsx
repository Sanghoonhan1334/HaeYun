// src/components/ThemeToggle.jsx
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // 초기 테마 상태를 현재 DOM 상태에서 가져오기
    if (typeof window !== 'undefined') {
      const isDark = document.documentElement.classList.contains('dark');
      return isDark ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked! Current theme:', theme);
    const newTheme = theme === "light" ? "dark" : "light";
    console.log('Switching to theme:', newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseDown={(e) => e.preventDefault()}
      className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 hover:scale-105 transition cursor-pointer z-50 relative"
      aria-label="Toggle Theme"
      title={theme === "light" ? "Switch to Dark Mode" : "Switch to Day Mode"}
      style={{ pointerEvents: 'auto' }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
