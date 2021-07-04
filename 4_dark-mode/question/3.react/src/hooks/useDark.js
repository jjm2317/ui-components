import { useEffect, useState } from "react";

const useDark = () => {
  let theme = localStorage.getItem("theme");

  if (!theme) {
    const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
    theme = matches ? "dark" : "light";

    localStorage.setItem("theme", theme);
  }
  const [dark, _setDark] = useState(theme === "dark" ? true : false);

  const setDark = (isDark) => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    _setDark(isDark);
  };

  return [dark, setDark];
};

export default useDark;
