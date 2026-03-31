"use client";

import { motion } from "framer-motion";
import { FaUniversity, FaCalendarAlt, FaPenNib } from "react-icons/fa";

export default function MySkill({ open, setOpen }) {

  const skills = [
    {
      icon: <FaUniversity size={28} />,
      title: "Ui/Visual Design",
      done: "21 Done",
      desc: "My work is driven by the belief that thoughtful design and strategic planning can empower brands",
    },
    {
      icon: <FaCalendarAlt size={28} />,
      title: "Ui/Visual Design",
      done: "21 Done",
      desc: "In this portfolio, you'll find a curated selection of projects that highlight my skills",
    },
    {
      icon: <FaPenNib size={28} />,
      title: "Motion Design",
      done: "20 Done",
      desc: "Each project here showcases my commitment to excellence and adaptability",
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

  // each row animation
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className={`transition-all duration-300 bg-diff text-text ${
        open ? "opacity-25" : "opacity-100"
      }`}
      onClick={() => open && setOpen(false)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <section className="container pt-10 lg:pt-30 pb-5 lg:pb-25 px-3.75">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="common-title text-start">MY SKILL</p>

          <h2 className="common-heading text-start max-w-318.75">
            Elevated Designs Personalized <br />the best Experiences
          </h2>
        </motion.div>

        {/* skills */}
        <motion.div variants={containerVariants}>

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-12.75 pb-10 px-5 border-b border-transparent hover:bg-red-500 transition duration-300"
            >

              {/* left */}
              <div className="flex items-center gap-6">

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-17.5 h-17.5 flex items-center justify-center border rounded-full"
                >
                  {skill.icon}
                </motion.div>

                <div>
                  <h3 className="text-[32px] leading-10.5 font-bold">
                    {skill.title}
                  </h3>
                  <p className="text-lg font-normal leading-6.75">
                    {skill.done}
                  </p>
                </div>

              </div>

              {/* middle */}
              <p className="max-w-xl text-sm leading-7.5 font-rubik font-normal lg:text-base">
                {skill.desc}
              </p>

              {/* button */}
              <button className="cursor-pointer text-base font-bold tracking-[1.28px] leading-8 flex items-center gap-2 group">
                READ MORE
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ›
                </span>
              </button>

            </motion.div>
          ))}

        </motion.div>
      </section>
    </motion.div>
  );
}