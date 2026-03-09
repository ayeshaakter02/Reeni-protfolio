import React from "react";

import Linear from "../assets/images/linear.png";
import Framer from "../assets/images/framer.png";
import Notion from "../assets/images/notion.png";
import Slack from "../assets/images/slack.png";
import Medium from "../assets/images/medium.png";
import Upwork from "../assets/images/upwork.png";
import Amazon from "../assets/images/amazon.png";
import Asana from "../assets/images/asana.png";

const companies = [
  { name: "Linear", logo: "../assets/images/linear.png" },
  { name: "Framer", logo: "../assets/images/framer.png" },
  { name: "Notion", logo: "../assets/images/notion.png" },
  { name: "Slack", logo: "../assets/images/slack.png" },
  { name: "Medium", logo: "../assets/images/medium.png" },
  { name: "Upwork", logo: "../assets/images/upwork.png" },
  { name: "Amazon", logo: "../assets/images/amazon.png" },
  { name: "Asana", logo: {Asana} },
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