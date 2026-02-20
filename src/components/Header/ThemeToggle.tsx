import { useAppStore } from "../../store/useTimerStore";

import sun from "../../../public/icons/sun.svg";
import moon from "../../../public/icons/moon.svg";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useAppStore();

  const icon = theme === "light" ? moon : sun;

  return (
    <button
      onClick={toggleTheme}
      className="hover:opacity-70 transition"
      aria-label="Toggle theme"
    >
      <img src={icon} alt="Toggle theme" className="h-7 w-7 cursor-pointer" />
    </button>
  );
};

export default ThemeToggle;
