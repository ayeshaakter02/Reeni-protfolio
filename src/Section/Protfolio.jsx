"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import portfolio1 from "/images/portfolio1.png";
import portfolio2 from "/images/portfolio2.png";
import portfolio3 from "/images/portfolio3.png";
import portfolio4 from "/images/portfolio4.png";

const Portfolio = ({ open, setOpen }) => {

  const items = [
    { img: portfolio1, title: "My Journey as a Creator", cat: "Development Coaches" },
    { img: portfolio2, title: "My Professional Portfolio", cat: "Development Coaches" },
    { img: portfolio3, title: "My Portfolio of Innovation", cat: "App Development" },
    { img: portfolio4, title: "A Portfolio of Creativity and Passion", cat: "Business Development" },
  ];

  // stagger container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className={`transition-all duration-300 pt-25 pb-30 bg-diff text-text ${
        open ? "opacity-25" : "opacity-100"
      }`}
      onClick={() => open && setOpen(false)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container px-3.75">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="Protfolio-latest">Latest Portfolio</p>

          <h2 className="Protfolio-heading">
            Transforming Ideas into Exceptional
          </h2>

          <p className="Protfolio-para mt-[9.5px] mb-15">
            Business consulting consultants provide expert advice and guida
            businesses to help them improve their performance, efficiency, and
            organizational
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="xl:grid xl:grid-cols-2 gap-7.5 xl:gap-11"
          variants={containerVariants}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`${index % 2 !== 0 ? "xl:mt-25" : ""}`}
            >

              {/* Image */}
              <div className="Protfolio-img-card overflow-hidden rounded-[20px]">
                <motion.img
                  src={item.img}
                  alt=""
                  className="w-full xl:max-w-[568.5px]"
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                />
              </div>

              {/* Content */}
              <div className="flex justify-between items-center mt-8.5 sm:px-10 xl:px-0">

                <div>
                  <h3 className="Protfolio-title">{item.title}</h3>
                  <p className="Protfolio-category">{item.cat}</p>
                </div>

                {/* Button */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="Protfolio-btn cursor-pointer"
                >
                  <FiArrowUpRight className="text-2xl" />
                </motion.div>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Portfolio;