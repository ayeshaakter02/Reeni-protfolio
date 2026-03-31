"use client";

import React from "react";
import { motion } from "framer-motion";
import Counter from "../Components/Counter";

const ProjectExperience = ({ open, setOpen }) => {

  // stagger for right side cards
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className={`transition-all duration-300 ${
        open ? "opacity-25" : "opacity-100"
      }`}
      onClick={() => open && setOpen(false)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container px-3.75 mt-7.5">

        <div className="lg:flex lg:gap-7.5 justify-center place-items-center">

          {/* Left Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-[622.5px] pt-7.5 lg:pt-9 px-5 lg:px-13 gradient-bg rounded-[20px]"
          >
            <div className="sm:flex max-h-51 gap-10 lg:gap-[65.61px] items-center">

              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-[185.78px] text-tomato text-[111.26px] md:text-[130px] xl:text-[160px] font-bold flex sm:justify-center sm:items-center font-inter"
              >
                <Counter end={25}/>
              </motion.div>

              <h2 className="text-[26px] sm:text-4xl lg:text-[48.1px] font-bold leading-[33.8px] xl:leading-[62.6px] text-text sm:my-6 lg:my-[39.23px]">
                Years Of experience
              </h2>
            </div>

            <p className="font-rubik md:text-sm xl:text-base font-normal text-text leading-6.5 pb-7.5 sm:pb-8 lg:pb-12.75 mt-3 sm:mt-0 lg:mt-3">
              Business consulting consultants provide expert advice and guida the
              businesses to help their performance efficiency
            </p>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            className="sm:flex gap-3 xl:gap-7.5"
            variants={containerVariants}
          >

            {/* Column 1 */}
            <div>
              <motion.div className="experience-rate card-border bg-diff" variants={itemVariants}>
                <h2 className="experience-rate-count text-text">
                  <span className="font-inter"><Counter end={20}/></span>
                  K+
                </h2>
                <p className="experience-rate-para">Our Project Complete</p>
              </motion.div>

              <motion.div className="experience-rate card-border mt-7.5 bg-diff" variants={itemVariants}>
                <h2 className="experience-rate-count font-inter text-text">
                  <Counter end={200}/>+
                </h2>
                <p className="experience-rate-para">Clients Reviews</p>
              </motion.div>
            </div>

            {/* Column 2 */}
            <div>
              <motion.div className="experience-rate card-border bg-diff" variants={itemVariants}>
                <h2 className="experience-rate-count text-text">
                  <span className="font-inter"><Counter end={10}/></span>K+
                </h2>
                <p className="experience-rate-para">Our Natural Products</p>
              </motion.div>

              <motion.div className="experience-rate card-border mt-7.5 bg-diff" variants={itemVariants}>
                <h2 className="experience-rate-count font-inter text-text">
                  <Counter end={1000}/>+
                </h2>
                <p className="experience-rate-para">Our Satisfied Clients</p>
              </motion.div>
            </div>

          </motion.div>

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectExperience;