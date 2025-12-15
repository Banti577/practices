import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HiMoon } from "react-icons/hi2";
import { useTheme } from "../contexts/themeContext";
import { MdOutlineWbSunny } from "react-icons/md";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [isopen, setIsOpen] = useState(false);

  const handleToggleBtn = () => {
   setIsOpen(prev => !prev);
  };

  const handleToggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div>
      <nav className="bg-[#457b9d] text-white shadow-md md:flex items-center justify-between p-2 px-8 w-full">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="text-3xl cursor-pointer w-[10%]"
        >
          Contaxt
        </div>

        <div
          className="md:hidden float-right relative -top-[30px]"
          onClick={handleToggleBtn}
        >
          <button id="menu-btn" className="text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="www.w3.org"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div
          id="menu"
          className={`z-0 md:flex items-center md:justify-end md:space-x-15 md:w-[90%] max-h-0 opacity-0 md:max-h-none md:opacity-100 overflow-hidden transition-all duration-700 ease-in-out ${
            isopen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="md:flex justify-center space-x-4 text-xl items-center">
            <li className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/About")}>
              About
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/AddPost")}>
              AddPost
            </li>
            <li onClick={handleToggleTheme} className="cursor-pointer">
              {theme === "light" ? (
                <MdOutlineWbSunny />
              ) : (
                <HiMoon style={{ color: "black" }} />
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
