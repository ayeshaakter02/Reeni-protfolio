import React, { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { useTheme } from "../provider/ThemeProviver";
import logoLight from "/images/logo-light.png";
import logoDark from "/images/logo-dark.png";
import { RxCross1 } from "react-icons/rx";

const Navbar = ({ open, setOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, handleTheme } = useTheme();

  const toggleTheme = () => {
    handleTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`transition-all duration-300 bg-diff text-text ${
        open ? "opacity-25" : "opacity-100"
      }`}
      onClick={() => open && setOpen(false)}
    >
      <nav className="container">
        <div
          className="flex justify-between md:gap-3 lg:gap-28 xl:gap-[200.87px]
 items-center py-2.5 px-3.75"
        >
          <img
            src={theme === "dark" ? logoDark : logoLight}
            alt="logo"
            className="w-30"
          />
          <ul className="lg:w-[503.25px] hidden lg:flex justify-between items-center">
            <li className="menu-item">
              <a href="#">Home</a>
            </li>
            <li className="menu-item">
              <a href="#">About</a>
            </li>
            <li className="menu-item">
              <a className="flex justify-center items-center" href="">
                Services <IoIosArrowDown className="ml-0.75" />
              </a>
            </li>
            <li className="menu-item">
              <a className="flex justify-center items-center" href="#">
                Blog <IoIosArrowDown className="ml-0.75" />
              </a>
            </li>
            <li className="menu-item">
              <a className="flex justify-center items-center" href="#">
                Project <IoIosArrowDown className="ml-0.75" />
              </a>
            </li>
            <li className="menu-item">
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="lg:w-62.25 md:flex justify-between">
            <ul className="lg:flex gap-2 hidden ">
              <li className="menu-icons">
                <FaInstagram />
              </li>
              <li className="menu-icons">
                <FaLinkedinIn />
              </li>
              <li className="menu-icons">
                <FaTwitter />
              </li>
              <li className="menu-icons">
                <FaFacebookF />
              </li>
            </ul>
            <div className="ml-40 sm:ml-80 md:ml-105 lg:ml-0">
              <button
                onClick={toggleTheme}
                className="menu-icons cursor-pointer bg-primary text-text-invert"
              >
                {theme === "dark" ? <IoSunny /> : <FaMoon />}
              </button>
            </div>
          </div>
          <button
            className="menu-icons cursor-pointer flex lg:hidden bg-tomato text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <CgMenuRightAlt />
          </button>
        </div>
        {/* Mobile Menu */}
        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-80 bg-diff shadow-lg z-50
  transform transition-transform duration-300 ease-out
  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div>
            {/* Close Button */}
            <div className="flex justify-between bg-bgnav px-4 py-5">
              <img
                src={theme === "dark" ? logoDark : logoLight}
                alt="logo"
                className="w-30"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer w-10 h-10 rounded-full bg-5Dgray flex justify-center items-center"
              >
                <RxCross1 />
              </button>
            </div>

            <ul className="flex flex-col gap-4 px-4">
              <li className="menu-item">
                <a href="#">Home</a>
              </li>
              <li className="menu-item">
                <a href="#">About</a>
              </li>

              <li className="menu-item flex justify-between items-center">
                <a href="#">Services</a>
                <IoIosArrowDown />
              </li>

              <li className="menu-item flex justify-between items-center">
                <a href="#">Blog</a>
                <IoIosArrowDown />
              </li>

              <li className="menu-item flex justify-between items-center">
                <a href="#">Project</a>
                <IoIosArrowDown />
              </li>

              <li className="menu-item">
                <a href="#">Contact</a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-6 px-4">
              <ul className="flex gap-2">
                <li className="menu-icons">
                  <FaInstagram />
                </li>
                <li className="menu-icons">
                  <FaLinkedinIn />
                </li>
                <li className="menu-icons">
                  <FaTwitter />
                </li>
                <li className="menu-icons">
                  <FaFacebookF />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
