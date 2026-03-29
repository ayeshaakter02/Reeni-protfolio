import React from "react";
import { motion } from "framer-motion";

const companies = [
  { name: "Linear", logo: "/images/linear.png" },
  { name: "Framer", logo: "/images/framer.png" },
  { name: "Notion", logo: "/images/notion.png" },
  { name: "Slack", logo: "/images/slack.png" },
  { name: "Medium", logo: "/images/medium.png" },
  { name: "Upwork", logo: "/images/upwork.png" },
  { name: "Amazon", logo: "/images/amazon.png" },
  { name: "Asana", logo: "/images/asana.png" },
];

const Companies = ({ open, setOpen }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  return (
    <motion.section  className={`transition-all duration-300 container px-3.75 my-30 ${
          open ? "opacity-25" : "opacity-100"
        }`}
        onClick={() => open && setOpen(false)}
        initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[155px_162px] auto-rows-[93.98px]">

        {companies.map((company, index) => (
          <div
            key={index}
            className="border border-[#D9DDE0] flex items-center justify-center hover:bg-gray-900 transition"
          >
            <motion.img
            variants={itemVariants}
              src={company.logo}
              alt={company.name}
              className="w-46 opacity-80 hover:opacity-100"
            />
          </div>
        ))}

      </div>
    </motion.section>
  );
};

export default Companies;