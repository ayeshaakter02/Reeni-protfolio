import React from "react";

const skills = [
  { name: "PHOTOSHOT", percent: 100 },
  { name: "FIGMA", percent: 95 },
  { name: "ADOBE XD", percent: 60 },
  { name: "ADOBE ILLUSTRATOR", percent: 70 },
];

const SkillBar = ({ name, percent }) => {
  return (
    <div className="mb-7.5 max-w-[622.5px]">
      <h4 className="leading-[17.5px] font-normal font-rubik tracking-[1px] text-sm mb-3.75">{name}</h4>

      <div className="relative p-0.75 bg-diff h-3.25 rounded-[10px]">

        {/* Red Progress */}
        <div
          className="bg-tomato h-1.75 rounded-[14px]"
          style={{ width: `${percent}%` }}
        ></div>

        {/* Percentage */}
        <span
          className="absolute -top-8 text-sm font-normal font-rubik leading-[24.5px]"
          style={{ left: `${percent}%`, transform: "translateX(-110%)" }}
        >
          {percent}%
        </span>

      </div>
    </div>
  );
};

const Skills = ({ open, setOpen }) => {
  return (
    <section  className={`transition-all duration-300 ${
          open ? "opacity-25" : "opacity-100"
        }`}
        onClick={() => open && setOpen(false)}>
      <div className="container mx-auto px-3.75">

        <div className="grid lg:grid-cols-2 gap-7.5 justify-center">

          {/* Design Skill */}
          <div>
            <div className="flex items-center gap-[19.68px] mb-7.5">
              <h2 className=" text-[32px] leading-10.5 font-bold">
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
          </div>

          {/* Development Skill */}
          <div>
            <div className="flex items-center gap-4 mb-7.5 ">
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;