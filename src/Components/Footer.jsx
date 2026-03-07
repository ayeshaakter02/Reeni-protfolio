import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container pt-20 xl:pt-52.5 pb-30 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-12">

        {/* LEFT */}
        <div>
          <img src="./src/assets/images/logo.png" alt="logo" className="mb-6 w-32" />

          <h2 className="text-4xl font-bold leading-snug mb-10">
            Get Ready To <br /> Create Great
          </h2>

          {/* email input */}
          <div className="flex items-center border-b border-gray-600 pb-2 max-w-sm">
            <input
              type="email"
              placeholder="Email Adress"
              className="bg-transparent outline-none flex-1 text-sm"
            />
            <FaEnvelope className="text-gray-500" />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">
            Quick Link
          </h3>

          <ul className="space-y-4">
            <li className="cursor-pointer">About Me</li>
            <li className="cursor-pointer">Service</li>
            <li className="cursor-pointer">Contact Us</li>
            <li className="cursor-pointer">Blog Post</li>
            <li className="cursor-pointer">Pricing</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">
            Contact
          </h3>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center">
                <FaEnvelope />
              </div>
              <p>nafiz125@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt />
              </div>
              <p>3891 Ranchview Dr. Richardson</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center">
                <FaPhoneAlt />
              </div>
              <p>01245789321</p>
            </div>

          </div>

          {/* social icons */}
          <div className="flex gap-4 mt-8">
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 cursor-pointer">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 cursor-pointer">
              <FaLinkedinIn />
            </div>

            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 cursor-pointer">
              <FaTwitter />
            </div>

            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 cursor-pointer">
              <FaFacebookF />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;