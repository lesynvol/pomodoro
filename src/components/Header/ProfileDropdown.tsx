import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppStore } from "../../store/useTimerStore";

import profileLight from "../../../public/icons/profile_light.svg";
import profileDark from "../../../public/icons/profile_dark.svg";

const ProfileDropdown = () => {
  const { theme } = useAppStore();

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const profile = theme === "light" ? profileLight : profileDark;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="hover:opacity-70 transition"
      >
        <img
          src={profile}
          alt="Profile"
          className="rounded-full h-10 w-10 object-cover"
        />
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-44 p-2 rounded-2xl shadow-lg border z-50 text-center ${
            theme === "light"
              ? "bg-[#E6EAFF] border-gray-900"
              : "bg-[#1f1d1d] border-gray-200"
          }`}
        >
          <Link
            to="/settings"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-lg transition ${
              theme === "light"
                ? "text-[#1F1D1D] hover:bg-[#1F1D1D] hover:text-white"
                : "text-white hover:bg-[#FFDE21] hover:text-[#1F1D1D]"
            }`}
          >
            Settings
          </Link>

          <hr
            className={`mx-6 my-1 border-t ${
              theme === "light" ? "border-[#1F1D1D]" : "border-[#FFDE21]"
            }`}
          />

          <Link
            to="/welcome"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-lg transition ${
              theme === "light"
                ? "text-[#1F1D1D] hover:bg-[#1F1D1D] hover:text-white"
                : "text-white hover:bg-[#FFDE21] hover:text-[#1F1D1D]"
            }`}
          >
            Log out
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
