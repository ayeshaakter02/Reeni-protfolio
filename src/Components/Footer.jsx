import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import logoLight from "/images/logo-light.png";
import logoDark from "/images/logo-dark.png";
import { useTheme } from "../provider/ThemeProviver";

const Footer = ({ open, setOpen }) => {
  const { theme } = useTheme();
  return (
    <div  onClick={() => open && setOpen(false)} className="bg-diff text-text">
      <footer className="container pt-20 xl:pt-30 pb-30 px-3.75">
      <div className="lg:flex justify-between">

        {/* LEFT */}
        <div>
          <img
  src={theme === "dark" ? logoDark : logoLight}
  alt="logo"
  className="mb-5.5 w-32"
/>

          <h2 className="text-[50px] font-bold leading-15 mb-10">
            Get Ready To <br /> <span className="font-light">Create Great</span>
          </h2>

          {/* email input */}
          <div className="flex items-center border-b border-gray-600 pb-2 max-w-sm">
            <input
              type="email"
              placeholder="Email Adress"
              className="bg-transparent outline-none flex-1 text-base font-normal font-rubik text-5Dgray"
            />
            <FaEnvelope />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-bold leading-7.5 mb-10">
            Quick Link
          </h3>

          <ul className="space-y-2">
            <li className="cursor-pointer font-rubik text-base font-normal leading-7.5">About Me</li>
            <li className="cursor-pointer font-rubik text-base font-normal leading-7.5">Service</li>
            <li className="cursor-pointer font-rubik text-base font-normal leading-7.5">Contact Us</li>
            <li className="cursor-pointer font-rubik text-base font-normal leading-7.5">Blog Post</li>
            <li className="cursor-pointer font-rubik text-base font-normal leading-7.5">Pricing</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-2xl font-bold leading-7.5 mb-10">
            Contact
          </h3>

          <div className="space-y-3.75">

            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 border-2 border-[#D9DDE0] rounded-full flex items-center justify-center">
                <FaEnvelope />
              </div>
              <p className="font-rubik font-normal text-base leading-07.5">nafiz125@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border-2 border-[#D9DDE0] rounded-full flex items-center justify-center">
                <FaMapMarkerAlt />
              </div>
              <p className="font-rubik font-normal text-base leading-07.5">3891 Ranchview Dr. Richardson</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border-2 border-[#D9DDE0] rounded-full flex items-center justify-center">
                <FaPhoneAlt />
              </div>
              <p className="font-rubik font-normal text-base leading-07.5">01245789321</p>
            </div>

          </div>

          {/* social icons */}
          <div className="flex gap-4 mt-7.5">
            <div className="menu-icons bg-[#0A0A0A0F] hover:bg-tomato">
              <FaInstagram />
            </div>

            <div className="menu-icons bg-[#0A0A0A0F] hover:bg-tomato">
              <FaLinkedinIn />
            </div>

            <div className="menu-icons bg-[#0A0A0A0F] hover:bg-tomato">
              <FaTwitter />
            </div>

            <div className="menu-icons bg-[#0A0A0A0F] hover:bg-tomato">
              <FaFacebookF />
            </div>
          </div>
        </div>

      </div>
    </footer>
    </div>
  );
};

export default Footer;