"use client";

import React from "react";
import { motion } from "framer-motion";
import latestUserImage from "/images/latest-user-image.png";

const LatestService = ({ open, setOpen }) => {

  // stagger for cards
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className={`transition-all duration-300 mt-15 lg:mt-[120.47px] mb-[60.3px] lg:mb-[120.5px] px-3.75 xl:px-0 bg-bg text-text ${
        open ? "opacity-25" : "opacity-100"
      }`}
      onClick={() => open && setOpen(false)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-15"
        >
          <p className="common-title">
            Latest Service
          </p>

          <h2 className="common-heading">
            Inspiring The World One Project
          </h2>

          <p className="max-w-156.75 mt-[9.5px] text-5Dgray text-base mx-auto font-normal leading-6.5 font-rubik">
            Business consulting consultants provide expert advice and guida businesses to help
            them improve their performance, efficiency, and organizational
          </p>
        </motion.div>

        {/* Content */}
        <div className="lg:flex gap-10 xl:gap-25 justify-center place-items-center">

          {/* Left Side Cards */}
          <motion.div
            className="space-y-5 max-w-[622.5px]"
            variants={containerVariants}
          >

            {/* Card 1 */}
            <motion.div className="card-border bg-diff py-7.5 sm:py-9.5 px-3.75 sm:px-10.5" variants={cardVariants}>
              <h3 className="latest-card-title">
                01. &nbsp; A Portfolio of Creativity
              </h3>
              <p className="latest-card-para">
                Business consulting consultants provide expert advice and guida the businesses to help their performance efficiency
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div className="card-border bg-diff py-7.5 sm:py-9.5 px-3.75 sm:px-10.5" variants={cardVariants}>
              <h3 className="latest-card-title">
                02. &nbsp; My Portfolio of Innovation
              </h3>
              <p className="latest-card-para">
                My work is driven by the belief that thoughtful design and strategic planning can empower brands and transform businesses.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div className="card-border bg-diff py-7.5 sm:py-9.5 px-3.75 sm:px-10.5" variants={cardVariants}>
              <h3 className="latest-card-title">
                03. &nbsp; A Showcase of My Projects
              </h3>
              <p className="latest-card-para">
                In this portfolio, you'll find a curated selection of projects that highlight my skills in responsive web design.
              </p>
            </motion.div>

          </motion.div>

          {/* Right Side Image */}
          <motion.div
            className="mt-7.5 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8, x: 80 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img src={latestUserImage} alt="latest-service" />
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default LatestService;