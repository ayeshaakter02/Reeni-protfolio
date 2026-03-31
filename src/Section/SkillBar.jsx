"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "PHOTOSHOP", percent: 100 },
  { name: "FIGMA", percent: 95 },
  { name: "ADOBE XD", percent: 60 },
  { name: "ADOBE ILLUSTRATOR", percent: 70 },
];

// Progress Bar Component
const SkillBar = ({ name, percent }) => {
  return (
    <motion.div
      className="mb-7.5 max-w-[622.5px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h4 className="leading-[17.5px] font-normal font-rubik tracking-[1px] text-sm mb-3.75">
        {name}
      </h4>

      <div className="relative p-0.75 bg-diff h-3.25 rounded-[10px] overflow-hidden">

        {/* Animated Progress */}
        <motion.div
          className="bg-tomato h-1.75 rounded-[14px]"
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Percentage */}
        <motion.span
          className="absolute -top-8 text-sm font-normal font-rubik leading-[24.5px]"
          initial={{ left: "0%" }}
          whileInView={{ left: `${percent}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ transform: "translateX(-110%)" }}
        >
          {percent}%
        </motion.span>

      </div>
    </motion.div>
  );
};

const Skills = ({ open, setOpen }) => {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      className={`transition-all duration-300 ${
        open ? "opacity-25" : "opacity-100"
      }`}
      onClick={() => open && setOpen(false)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-3.75">

        <div className="grid lg:grid-cols-2 gap-7.5 justify-center">

          {/* Design Skill */}
          <motion.div variants={containerVariants}>
            <div className="flex items-center gap-[19.68px] mb-7.5">
              <h2 className="text-[32px] leading-10.5 font-bold">
                Design Skill
              </h2>

              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-5Dgray rounded-full"></span>
                <span className="w-17.25 h-0.5 bg-5Dgray"></span>
                <span className="w-1.5 h-1.5 bg-5Dgray rounded-full"></span>
              </div>
            </div>

            {skills.map((skill, i) => (
              <SkillBar key={i} {...skill} />
            ))}
          </motion.div>

          {/* Development Skill */}
          <motion.div variants={containerVariants}>
            <div className="flex items-center gap-4 mb-7.5">
              <h2 className="text-[32px] leading-10.5 font-bold">
                Development Skill
              </h2>

              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-5Dgray rounded-full"></span>
                <span className="w-17.25 h-0.5 bg-5Dgray"></span>
                <span className="w-1.5 h-1.5 bg-5Dgray rounded-full"></span>
              </div>
            </div>

            {skills.map((skill, i) => (
              <SkillBar key={i} {...skill} />
            ))}
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Skills;