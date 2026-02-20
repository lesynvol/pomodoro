import { useAppStore } from "../../store/useTimerStore";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ProfileDropdown from "./ProfileDropdown";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { theme } = useAppStore();

  return (
    <header
      className={`border-b ${
        theme === "light"
          ? "bg-[#E6EAFF] border-gray-300"
          : "bg-[#1f1d1d] border-gray-700"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />

        <nav className="flex items-center gap-4">
          <NavLinks />
          <ProfileDropdown />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
