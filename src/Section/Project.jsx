"use client";

import React from "react";
import { motion } from "framer-motion";
import webDesign from "/images/web-design.png";
import UiUxDesign from "/images/ui-ux-design.png";
import researchDesign from "/images/research-design.png";
import marketingDesign from "/images/marketing-design.png";

const Project = ({ open, setOpen }) => {

  const projects = [
    {
      img: webDesign,
      title: "Web Design",
      count: "120 Projects",
    },
    {
      img: UiUxDesign,
      title: "Ui/Ux Design",
      count: "241 Projects",
    },
    {
      img: researchDesign,
      title: "Web Research",
      count: "240 Projects",
    },
    {
      img: marketingDesign,
      title: "Marketing",
      count: "331 Projects",
    },
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

  // each card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
      <div className="container px-3.75 py-7.5 xl:mt-121.75 lg:pb-22.5">

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:flex justify-center place-items-center gap-2.5 lg:gap-7.5 xl:pt-7.5"
          variants={containerVariants}
        >

          {projects.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="project-card transform transition duration-300 hover:-translate-y-2 hover:scale-105"
            >

              <motion.img
                src={item.img}
                alt=""
                className="project-img"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />

              <h2 className="project-card-title">{item.title}</h2>
              <p className="project-card-para">{item.count}</p>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </motion.div>
  );
};

export default Project;