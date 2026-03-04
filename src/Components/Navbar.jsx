import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
    <nav className='container'>
        <div className='flex gap-[200.87px] items-center py-2.5 px-3.75'>
            <img className='w-30.25' src="./src/assets/images/logo.png" alt="" />
            <ul className='max-w-[503.25px] flex justify-between items-center'>
              <li className='menu-item'><a href="#">Home</a></li>
              <li className='menu-item'><a href="#">About</a></li>
              <li className='menu-item'><a className='flex justify-center items-center' href="">Services <IoIosArrowDown className='ml-[3px]'/></a></li>
              <li className='menu-item'><a className='flex justify-center items-center' href="#">Blog <IoIosArrowDown className='ml-[3px]'/></a></li>
              <li className='menu-item'><a className='flex justify-center items-center' href="#">Project <IoIosArrowDown className='ml-[3px]'/></a></li>
              <li className='menu-item'><a href="#">Contact</a></li>
            </ul>
            <div className='max-w-62.25 flex justify-between'>
              <ul className='flex gap-2'>
              <li className='menu-icons'><FaInstagram /></li>
              <li className='menu-icons'><FaLinkedinIn /></li>
              <li className='menu-icons'><FaTwitter /></li>
              <li className='menu-icons'><FaFacebookF /></li>
            </ul>
            <li className='menu-icons ml-[25.01px] bg-tomato text-white'><CgMenuRightAlt /></li>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
