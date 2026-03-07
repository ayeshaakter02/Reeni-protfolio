import React, { useContext, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { useTheme } from '../provider/ThemeProviver';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
   const { theme, handleTheme } = useTheme();

  const toggleTheme = () => {
    handleTheme(theme === "dark" ? "light" : "dark");
  };


  return (
    <div className=''>
    <nav className='container'>
        <div className='flex justify-between md:gap-3 lg:gap-28 xl:gap-[200.87px]
 items-center py-2.5 px-3.75'>
            <img className='w-30' src="/src/assets/images/logo.png" alt="" />
            <ul className='lg:w-[503.25px] hidden md:flex justify-between items-center'>
              <li className='menu-item'><a href="#">Home</a></li>
              <li className='menu-item'><a href="#">About</a></li>
              <li className='menu-item'><a className='flex justify-center items-center' href="">Services <IoIosArrowDown className='ml-0.75'/></a></li>
              <li className='menu-item'><a className='flex justify-center items-center' href="#">Blog <IoIosArrowDown className='ml-0.75'/></a></li>
              <li className='menu-item'><a className='flex justify-center items-center' href="#">Project <IoIosArrowDown className='ml-0.75'/></a></li>
              <li className='menu-item'><a href="#">Contact</a></li>
            </ul>
            <div className='lg:w-62.25 md:flex justify-between'>
              <ul className='md:flex gap-2 hidden '>
              <li className='menu-icons'><FaInstagram /></li>
              <li className='menu-icons'><FaLinkedinIn /></li>
              <li className='menu-icons'><FaTwitter /></li>
              <li className='menu-icons'><FaFacebookF /></li>
            </ul>
                        <div className='ml-45 md:ml-0'>
              <button
      onClick={toggleTheme}
      className="menu-icons cursor-pointer bg-primary text-text-invert"
    >
      {theme === "dark" ? <IoSunny /> : <FaMoon />}
    </button>
            </div>
            </div>
            <button
            className="menu-icons cursor-pointer flex md:hidden bg-tomato text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <CgMenuRightAlt />
          </button>
        </div>
                {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <ul className="flex flex-col gap-3">
            <li className='menu-item'><a href="#">Home</a></li>
            <li className='menu-item'><a href="#">About</a></li>
            <li className="menu-item flex items-center justify-between">
              <a href="#">Services</a>
              <IoIosArrowDown />
            </li>
            <li className="menu-item flex items-center justify-between">
              <a href="#">Blog</a>
              <IoIosArrowDown />
            </li>
            <li className="menu-item flex items-center justify-between">
              <a href="#">Project</a>
              <IoIosArrowDown />
            </li>
            <li className='menu-item'><a href="#">Contact</a></li>
          </ul>
          {/* Mobile Social Icons */}
          <div className='lg:w-62.25 md:hidden justify-between'>
              <ul className='flex gap-2'>
              <li className='menu-icons'><FaInstagram /></li>
              <li className='menu-icons'><FaLinkedinIn /></li>
              <li className='menu-icons'><FaTwitter /></li>
              <li className='menu-icons'><FaFacebookF /></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
    </div>
  )
}

export default Navbar





// lg:gap-30 xl:gap-[200.87px]