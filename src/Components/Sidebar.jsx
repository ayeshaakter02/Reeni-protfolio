import { FaFacebookMessenger } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { useState } from "react";

const Sidebar = () => {
      const [open, setOpen] = useState(false);
  return (
    <div>
        <div>
          <div
            className={`fixed top-[48%] -translate-y-1/2 
      transition-all duration-500
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
                          <div className='justify-between pb-7.5'>
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
    </div>
  )
}

export default Sidebar