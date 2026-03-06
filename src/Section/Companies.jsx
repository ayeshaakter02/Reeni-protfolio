import React from "react";

const companies = [
  { name: "Linear", logo: "./src/assets/images/linear.png" },
  { name: "Framer", logo: "./src/assets/images/framer.png" },
  { name: "Notion", logo: "./src/assets/images/notion.png" },
  { name: "Slack", logo: "./src/assets/images/slack.png" },
  { name: "Medium", logo: "./src/assets/images/medium.png" },
  { name: "Upwork", logo: "./src/assets/images/upwork.png" },
  { name: "Amazon", logo: "./src/assets/images/amazon.png" },
  { name: "Asana", logo: "./src/assets/images/asana.png" },
];

const Companies = () => {
  return (
    <section className="container px-3.75 my-30">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[155px_162px] auto-rows-[93.98px]">

        {companies.map((company, index) => (
          <div
            key={index}
            className="border border-[#D9DDE0] flex items-center justify-center hover:bg-gray-900 transition"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-46 opacity-80 hover:opacity-100"
            />
          </div>
        ))}

      </div>
    </section>
  );
};

export default Companies;