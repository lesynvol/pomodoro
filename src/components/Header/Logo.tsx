import { Link } from "react-router-dom";
import { useAppStore } from "../../store/useTimerStore";

import logoLight from "../../../public/logo_light.svg";
import logoDark from "../../../public/logo_dark.svg";

const Logo = () => {
  const { theme } = useAppStore();

  const logo = theme === "light" ? logoLight : logoDark;

  return (
    <Link to="/" className="flex items-center">
      <img src={logo} alt="Pomodoro Logo" className="h-10" />
    </Link>
  );
};

export default Logo;
