import { FaUniversity, FaCalendarAlt, FaPenNib } from "react-icons/fa";

export default function MySkill() {
  const skills = [
    {
      icon: <FaUniversity size={28} />,
      title: "Ui/Visual Design",
      done: "21 Done",
      desc: "My work is driven by the belief that thoughtful design and strategic planning can empower brands",
      active: true,
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
    <section className="container pt-10 lg:pt-30 pb-5 lg:pb-25 px-3.75">

      {/* heading */}
      <p className="text-red-500 text-sm font-semibold mb-4">MY SKILL</p>

      <h2 className="text-3xl md:text-5xl font-bold mb-16 max-w-3xl">
        Elevated Designs Personalized the best Experiences
      </h2>

      {/* skills */}
      <div className="space-y-6">

        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-8 border-b border-gray-700
            ${
              skill.active
                ? "bg-red-500"
                : "bg-transparent "
            }`}
          >

            {/* left */}
            <div className="flex items-center gap-6">

              <div className="w-14 h-14 flex items-center justify-center border rounded-full">
                {skill.icon}
              </div>

              <div>
                <h3 className="text-xl font-bold">{skill.title}</h3>
                <p className="text-sm">{skill.done}</p>
              </div>

            </div>

            {/* middle */}
            <p className="max-w-xl text-sm lg:text-base">
              {skill.desc}
            </p>

            {/* button */}
            <button className="text-sm font-semibold tracking-widest flex items-center gap-2">
              READ MORE
              <span>›</span>
            </button>

          </div>
        ))}

      </div>
    </section>
  );
}