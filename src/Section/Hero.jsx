import { IoArrowForwardOutline } from "react-icons/io5";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import hero from "/images/hero.png";

const Hero = ({ open, setOpen }) => {
  return (
    <div>
      <div className="container lg:pt-[10.55px] px-3.75 relative">
        <div className={`transition-all duration-300 ${
          open ? "opacity-25" : "opacity-100"
        }`}
        onClick={() => open && setOpen(false)}>
          {/* banner start */}
        <div  onClick={() => open && setOpen(false)}>
            <div className="xl:absolute left-[13.5%] -top-2">
          <div className="w-full xl:w-239 mx-auto flex justify-center relative z-20 bg-cover">
            <img
              className="lg:w-[637.5px] lg:h-[805.9px] shadow-x-2xl"
              src={hero}
              alt=""
            />
          </div>
          <h2 className="hero-heading">WEB DESIGN</h2>
          <h2 className="hero-heading2">WEB DESIGN</h2>
        </div>
        <div className="sm:flex justify-between place-items-center xl:gap-[558.75px] mt-5 xl:mt-48 mx-20 lg:mx-0">
          <div className="max-w-101.25">
            <h2 className="font-bold text-xl lg:text-[28px] leading-9.5 uppercase mt-7.5 md:mt-0">
              Hello i’m
            </h2>
            <h1 className="font-bold text-[38px] lg:text-[90px] leading-12 lg:leading-[103.5px]">
              Brooklyn Simmons
            </h1>
            <button className="cursor-pointer mt-2.5 lg:mt-5 w-[194.42px] rounded-full text-white px-7.5 font-rubik font-medium text-base leading-15 tracking-[0.5px] bg-tomato flex items-center">
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
    </div>
  );
};

export default Hero;
