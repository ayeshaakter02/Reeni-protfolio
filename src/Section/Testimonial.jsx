"use client";

import React from "react";
import { motion } from "framer-motion";
import testimonial from "/images/testimonial-icon.png";

const Testimonial = ({ open, setOpen }) => {

  // container stagger
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
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      className={`transition-all duration-300 container px-3.75 ${
        open ? "opacity-25" : "opacity-100"
      }`}
      onClick={() => open && setOpen(false)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >

      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="common-title">Our Testimonial</p>
        <h2 className="common-heading mb-15">
          Enhancing Collaboration <br /> between Remote
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-7.5" variants={containerVariants}>
        
        {[1, 2].map((item) => (
          <motion.div
            key={item}
            className="bg-diff rounded-3xl p-8 relative border-b-4 border-red-500"
            variants={cardVariants}
          >
            <div className="flex">
              <img src={testimonial} alt="testimonial icon" />
            </div>

            <motion.p
              className="text-5Dgray leading-[30.6px] font-normal text-lg font-rubik mt-[42.39px] mb-[36.98px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              A personal portfolio is a curated collection of an individual's
              professional work, showcasing their skills. A personal portfolio
              is a curated collection of an individual's professional work.
            </motion.p>

            <h4 className="font-bold text-lg leading-[20.5px]">Cameron Williamson</h4>

            <p className="font-rubik text-sm leading-[22.4px] font-normal text-5Dgray mt-2.75">
              Ui/Ux Designer
            </p>
          </motion.div>
        ))}

      </motion.div>
    </motion.section>
  );
};

export default Testimonial;