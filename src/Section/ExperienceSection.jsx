import React from "react";
import experience from "/images/experience.png";
import { motion } from "framer-motion";

const ExperienceSection = ({ open, setOpen }) => {
  // stagger container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // items animation
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section className={`transition-all duration-300 ${
          open ? "opacity-25" : "opacity-100"
        }`}
        onClick={() => open && setOpen(false)} 
        initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}>
      <div className="container mx-auto px-7.5 lg:px-3.75">

        <div className="lg:flex gap-10 xl:gap-28">

          {/* Left Image */}
          <motion.div className="w-full flex justify-center" 
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}>
            <img
              src={experience}
              alt="experience"
              className="rounded-[20px] lg:max-w-[622.5px] object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div className="mt-7.5 lg:mt-0 xl:pr-34.5" 
          variants={containerVariants}>

            {/* Title */}
            <motion.div className="flex items-center gap-4 mb-8 sm:mb-4 xl:mb-8" 
            variants={itemVariants}
            >
              <h2 className="text-[32px] leading-10.5 font-bold">
                Experiences
              </h2>

              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-5Dgray rounded-full"></span>
                <span className="w-17.25 h-0.5 bg-5Dgray"></span>
                <span className="w-1.5 h-1.5 bg-5Dgray rounded-full"></span>
            </div>
            </motion.div>

            {/* Experience Item */}
            <motion.div className="mb-7.5 xl:mb-12.5" variants={itemVariants}>
              <p className="ExperienceSection-exp">
                experience
              </p>

              <h3 className="ExperienceSection-name">
                Fatima Asrafy
              </h3>

              <p className="ExperienceSection-dept">
                UI/UX Designer
              </p>

              <p className="ExperienceSection-para">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum desi dolore eu fugiat nulla pariatu Duis aute irure
              </p>
            </motion.div>

            {/* Experience Item */}
            <motion.div variants={itemVariants}>
              <p className="ExperienceSection-exp">
                experience
              </p>

              <h3 className="ExperienceSection-name">
                Fatima Asrafy
              </h3>

              <p className="ExperienceSection-dept">
                UI/UX Designer
              </p>

              <p className="ExperienceSection-para">
                Interested in working together? Let’s bring your ideas to
life! Contact me, and let’s start building something.
              </p>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </motion.section>
  );
};

export default ExperienceSection;