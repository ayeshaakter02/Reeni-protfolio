import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    title: "Trainer Marketing",
    year: "2005-2009",
    desc: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio.",
  },
  {
    title: "Assistant Director",
    year: "2010-2014",
    desc: "Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs.",
  },
  {
    title: "Design Assistant",
    year: "2008-2012",
    desc: "I’ve had the privilege of working with various clients, from startups to established companies, helping bring their visions to life.",
  },
  {
    title: "Design Assistant",
    year: "2008-2012",
    desc: "Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs a personal.",
  },
];

const Experience = ({ open, setOpen }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  return (
    <motion.section  className={`transition-all duration-300 pt-22.5 pb-18.75 ${
          open ? "opacity-25" : "opacity-100"
        }`}
        onClick={() => open && setOpen(false)} 
        initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}>
      <div className="container mx-auto px-3.75">
        <div className="flex gap-[19.68px] mt-0.5 sm:mt-1">
            <h3 className="font-bold text-[32px] md:leading-10.5">Education</h3>
            <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-5Dgray rounded-full"></span>
                <span className="w-17.25 h-0.5 bg-5Dgray"></span>
                <span className="w-1.5 h-1.5 bg-5Dgray rounded-full"></span>
            </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-7.5 mt-7.5">

          {data.map((item, index) => (
            <motion.div 
            variants={cardVariants}
              key={index}
              className="card-border px-5 md:px-10 py-7 md:py-12 hover:shadow-lg transition bg-diff"
            >
              <h3 className="text-text text-base font-normal leading-6.5 font-rubik">
                {item.title}
              </h3>

              <h4 className="font-bold text-lg leading-7 text-text mt-1.25">{item.year}</h4>

              <p className="text-textcard font-rubik font-normal text-base leading-7.5 mt-2 md:mt-4.5 mb-0.5">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </motion.section>
  );
};

export default Experience;