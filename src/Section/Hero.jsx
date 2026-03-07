import { IoArrowForwardOutline } from "react-icons/io5";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { useState } from "react";

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="container lg:pt-[10.55px] px-3.75 relative">
        {/* Sidebar start */}
        <div>
          <div
            className={`fixed top-[48%] -translate-y-1/2 
      transition-all duration-500 z-40
      ${open ? "right-2" : "-right-100"}`}
          >
            <div
              className="w-100 bg-light-gray pl-7.5 pr-11.25"
            >
              <div className="h-18 w-96.25 bg-[#EDEDED] items-center flex gap-46">
                <img src="./src/assets/images/logo.png" alt="" />
                <button onClick={() => setOpen(!open)} className="w-10 h-10 rounded-full bg-5Dgray justify-center items-center flex"><RxCross1 /></button>
              </div>
              <div className="justify-start">
                <img className="my-7.5" src="./src/assets/images/link.png" alt="" />
                <h2 className="font-rubik text-[20px] font-bold leading-7.5 text-chinese-black">Freelancer delivering exceptional Webflow, and Next.js solutions.</h2>
                <p className="mt-[19.4px] mb-[38.98px] font-rubik text-base font-normal leading-[25.6px] text-5Dgray">I am a skilled freelancer specializing in Webflow development, Figma design, and Next.js projects. I deliver creative, dynamic, and user-centric web solutions.</p>
                <div>
                    <div className="flex gap-5 items-center mb-5">
                        <IoCall className="contact-icons" />
                        <div>
                            <h3 className="contact">Call Now</h3>
                            <p className="contact-address">+92 (8800) - 98670</p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center mb-5">
                        <IoMdMail className="contact-icons" />
                        <div>
                            <h3 className="contact">Call Now</h3>
                            <p className="contact-address">+92 (8800) - 98670</p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center mb-5">
                        <FaLocationCrosshairs className="contact-icons" />
                        <div>
                            <h3 className="contact">Call Now</h3>
                            <p className="contact-address">+92 (8800) - 98670</p>
                        </div>
                    </div>
                </div>
                <p className="font-medium text-base leading-7 text-chinese-black tracking-[0.5px] mt-5.5">find with me</p>
                          <div className='justify-between pt-3.75 pb-7.5'>
                              <ul className='flex gap-2'>
                              <li className='menu-icons bg-[#EDEDED]'><FaInstagram /></li>
                              <li className='menu-icons bg-[#EDEDED]'><FaLinkedinIn /></li>
                              <li className='menu-icons bg-[#EDEDED]'><FaTwitter /></li>
                              <li className='menu-icons bg-[#EDEDED]'><FaFacebookF /></li>
                            </ul>
                          </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="w-13.75 h-13.75 rounded-full text-white bg-tomato right-5 top-[82%] -translate-y-1/2 z-50 flex justify-center items-center fixed"
          >
            <FaFacebookMessenger />
          </button>
          <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
            {/* Top Vertical Text */}
            <div className="bg-[#1F242E] text-white px-2.5 py-6 flex items-center justify-center">
              <span className="rotate-180 [writing-mode:vertical-rl] tracking-widest text-base font-medium leading-5.25">
                48 PRE-BUILT SITES
              </span>
            </div>

            {/* Bottom Green Icon */}
            <div className="bg-[#48b04d] flex items-center justify-center px-2.5 py-3.75">
              <img
                src="./src/assets/images/SVG.png"
                alt="logo"
                className="w-5.5 h-5.5"
              />
            </div>
          </div>
        </div>
        {/* Sidebar end */}
        {/* banner start */}
        <div>
            <div className="xl:absolute left-[13.5%] -top-2">
          <div className="w-full xl:w-239 mx-auto flex justify-center relative z-20 bg-cover">
            <img
              className="lg:w-[637.5px] lg:h-[805.9px] shadow-x-2xl"
              src="./src/assets/images/hero.png"
              alt=""
            />
          </div>
          <h2 className="hero-heading">WEB DESIGN</h2>
          <h2 className="hero-heading2">WEB DESIGN</h2>
        </div>
        <div className="sm:flex justify-between place-items-center xl:gap-[558.75px] mt-5 xl:mt-48 mx-20 lg:mx-0">
          <div className="w-101.25">
            <h2 className="font-bold text-xl lg:text-[28px] leading-9.5 uppercase mt-7.5 md:mt-0">
              Hello i’m
            </h2>
            <h1 className="font-bold text-[38px] lg:text-[90px] leading-12 lg:leading-[103.5px]">
              Brooklyn Simmons
            </h1>
            <button className="mt-2.5 lg:mt-5 w-[194.42px] rounded-full text-white px-7.5 font-rubik font-medium text-base leading-15 tracking-[0.5px] bg-tomato flex items-center">
              View Portfolio
              <span>
                <IoArrowForwardOutline />
              </span>
            </button>
          </div>
          <div className="w-[326.25px] lg:pl-5.75 font-rubik text-base font-normal">
            <h3 className="leading-7.5 mt-7.5">About Me</h3>
            <p className="leading-7.5 mt-5 mb-10 text-5Dgray">
              A personal <span className="text-tomato">portfolio</span> is a
              collection of to your work, that is achievements, and a skills
              that <span className="text-tomato">web design</span> highlights in
              your
            </p>
            <p className="leading-7.5">Find me on</p>
            <div className="flex gap-1.5 mt-2.5">
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
        </div>
        {/* banner end  */}
      </div>
    </div>
  );
};

export default Hero;
