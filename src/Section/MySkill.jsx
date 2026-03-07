import { FaUniversity, FaCalendarAlt, FaPenNib } from "react-icons/fa";

export default function MySkill() {
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

  return (
    <div className="">
      <section className="container pt-10 lg:pt-30 pb-5 lg:pb-25 px-3.75">

      {/* heading */}
      <p className="common-title text-start">MY SKILL</p>

      <h2 className="common-heading text-start max-w-318.75">
        Elevated Designs Personalized <br />the best Experiences
      </h2>

      {/* skills */}
      <div className="">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-12.75 pb-10 px-5 border-b border-transparent hover:bg-red-500 transition duration-300"
          >

            {/* left */}
            <div className="flex items-center gap-6">

              <div className="w-17.5 h-17.5 flex items-center justify-center border rounded-full">
                {skill.icon}
              </div>

              <div>
                <h3 className="text-[32px] leading-10.5font-bold">{skill.title}</h3>
                <p className="text-lg font-normal leading-6.75 ">{skill.done}</p>
              </div>

            </div>

            {/* middle */}
            <p className="max-w-xl text-sm leading-7.5 font-rubik font-normal lg:text-base">
              {skill.desc}
            </p>

            {/* button */}
            <button className="cursor-pointer text-base font-bold tracking-[1.28px] leading-8 flex items-center gap-2">
              READ MORE
              <span>›</span>
            </button>

          </div>
        ))}

      </div>
    </section>
    </div>
  );
}