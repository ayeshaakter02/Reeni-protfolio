import { FaCheck, FaArrowRight } from "react-icons/fa";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$ 5.00",
      features: [
        "5 Social Media Account",
        "Free Platform Access",
        "24/7 Customer Support",
      ],
    },
    {
      name: "Basic",
      price: "$ 230.00",
      highlight: true,
      features: [
        "5 Social Media Account",
        "Free Platform Access",
        "Marketing Platform",
        "24/7 Customer Support",
        "Life time support",
      ],
    },
    {
      name: "Premium",
      price: "$ 45.00",
      features: [
        "5 Social Media Account",
        "Free Platform Access",
        "24/7 Customer Support",
      ],
    },
  ];

  return (
    <section className="container py-10 lg:py-30 px-2 lg:px-3.75">

      {/* heading */}
      <p className="text-red-500 text-sm text-center mb-4">
        MY PRICE PLAN
      </p>

      <h2 className="text-center text-3xl md:text-5xl font-bold mb-16 max-w-3xl mx-auto">
        Enhancing Collaboration between Remote
      </h2>

      {/* cards */}
      <div className="grid lg:grid-cols-3 gap-10 items-center">

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-3xl p-10 transition-all duration-300
            ${
              plan.highlight
                ? "bg-[#e9e9e9] text-black border border-red-500 scale-105"
                : "bg-[#e9e9e9] text-black border border-transparent"
            }`}
          >

            {/* title */}
            <h3 className="text-lg font-semibold mb-4">{plan.name}</h3>

            {/* price */}
            <h2 className="text-4xl font-bold mb-2">{plan.price}</h2>
            <p className="text-sm mb-8">Per Month</p>

            <div className="border-b mb-8"></div>

            {/* features */}
            <ul className="space-y-4 mb-10">

              {plan.features.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600">

                  <span className="bg-red-500 text-white rounded-full p-1">
                    <FaCheck size={10} />
                  </span>

                  {item}

                </li>
              ))}
            </ul>

            {/* button */}
            <button
              className={`flex items-center gap-2 px-6 py-3 rounded-full border
              ${
                plan.highlight
                  ? "bg-red-500 text-white border-red-500"
                  : "border-gray-400"
              }`}
            >
              Get Started
              <FaArrowRight />
            </button>

          </div>
        ))}

      </div>
    </section>
  );
}