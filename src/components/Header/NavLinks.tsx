import { Link } from "react-router-dom";
import { useAppStore } from "../../store/useTimerStore";

import statisticsLight from "../../../public/icons/statistics_light.svg";
import statisticsDark from "../../../public/icons/statistics_dark.svg";
import archiveLight from "../../../public/icons/archieve_light.svg";
import archiveDark from "../../../public/icons/archieve_dark.svg";

const NavLinks = () => {
  const { theme } = useAppStore();

  const statistics = theme === "light" ? statisticsLight : statisticsDark;

  const archive = theme === "light" ? archiveLight : archiveDark;

  return (
    <>
      <Link to="/statistics" className="hover:opacity-70 transition">
        <img src={statistics} alt="Statistics" className="h-8 w-8" />
      </Link>

      <Link to="/archive" className="hover:opacity-70 transition">
        <img src={archive} alt="Archive" className="h-8 w-8" />
      </Link>
    </>
  );
};

export default NavLinks;
