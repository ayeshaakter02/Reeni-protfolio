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
import logoLight from "/images/logo-light.png";
import logoDark from "/images/logo-dark.png";
import link from "/images/link.png";
import svg from "/images/svg.png";
import { useTheme } from "../provider/ThemeProviver";

const Sidebar = ({ open, setOpen }) => {
  const { theme } = useTheme();

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-[48%] -translate-y-1/2 transition-all duration-500 z-40
        ${open ? "right-2" : "-right-100"}`}
      >
        <div className="max-w-100 bg-diff pl-7.5 pr-11.25">
          
          <div className="h-18 w-96.25 bg-bgnav items-center flex gap-46">
            <img src={theme === "dark" ? logoDark : logoLight} alt="logo" />

            <button
              onClick={() => setOpen(false)}
              className="cursor-pointer w-10 h-10 rounded-full bg-5Dgray flex justify-center items-center"
            >
              <RxCross1 />
            </button>
          </div>

          <div>
            <img className="my-7.5" src={link} alt="" />

            <h2 className="font-rubik text-[20px] font-bold leading-7.5 text-text">
              Freelancer delivering exceptional Webflow, and Next.js solutions.
            </h2>

            <p className="mt-[19.4px] mb-[38.98px] font-rubik text-base text-text2">
              I am a skilled freelancer specializing in Webflow development,
              Figma design, and Next.js projects.
            </p>

            {/* Contact */}
            <div>
              <div className="flex gap-5 items-center mb-5">
                <IoCall className="contact-icons" />
                <p className="contact-address">+92 (8800) - 98670</p>
              </div>

              <div className="flex gap-5 items-center mb-5">
                <IoMdMail className="contact-icons" />
                <p className="contact-address">example@gmail.com</p>
              </div>

              <div className="flex gap-5 items-center mb-5">
                <FaLocationCrosshairs className="contact-icons" />
                <p className="contact-address">New York, USA</p>
              </div>
            </div>

            <p className="font-medium text-base mt-5.5">find with me</p>

            <ul className="flex gap-2 pt-3.75 pb-7.5">
              <li className="menu-icons bg-[#EDEDED]"><FaInstagram /></li>
              <li className="menu-icons bg-[#EDEDED]"><FaLinkedinIn /></li>
              <li className="menu-icons bg-[#EDEDED]"><FaTwitter /></li>
              <li className="menu-icons bg-[#EDEDED]"><FaFacebookF /></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Messenger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-13.75 h-13.75 rounded-full text-white bg-tomato right-5 top-[82%] -translate-y-1/2 z-50 flex justify-center items-center fixed"
      >
        <FaFacebookMessenger />
      </button>

      {/* Right Side Vertical */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
        <div className="bg-[#1F242E] text-white px-2.5 py-6">
          <span className="rotate-180 [writing-mode:vertical-rl] tracking-widest text-base">
            48 PRE-BUILT SITES
          </span>
        </div>

        <div className="bg-[#48b04d] flex items-center justify-center px-2.5 py-3.75">
          <img src={svg} alt="logo" className="w-5.5 h-5.5" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;