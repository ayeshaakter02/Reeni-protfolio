import { FaCheck, FaArrowRight } from "react-icons/fa";

export default function Pricing({ open, setOpen }) {
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
    <section  onClick={() => open && setOpen(false)} className="container py-10 lg:py-30 px-2 lg:px-3.75">

      {/* heading */}
      <p className="common-title">
        MY PRICE PLAN
      </p>

      <h2 className="common-heading  mb-15">
        Enhancing Collaboration between Remote
      </h2>

      {/* cards */}
      <div className="grid lg:grid-cols-3 gap-10">

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-3xl mt-18.25 pt-[37.72px] pl-9.5 pb-[37.28px] text-black  
hover:border-r-2 hover:border-b-2 hover:border-tomato hover:scale-110 hover:shadow-xl 
transition-all duration-300 bg-diff`}
          >

            {/* title */}
            <h3 className="text-lg font-bold leading-6.75 mb-0.5 text-text">{plan.name}</h3>

            {/* price */}
            <h2 className="text-5xl font-bold mb-0.5 leading-15 text-text">{plan.price}</h2>
            <p className="text-lg font-bold leading-6.75 text-text">Per Month</p>

            {/* features */}
            <ul className="space-y-3.75 mt-10.75">

              {plan.features.map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-5Dgray font-rubik text-base font-normal leading-6">

                  <span className="bg-red-500 text-white rounded-full p-1">
                    <FaCheck size={10} />
                  </span>

                  {item}

                </li>
              ))}
            </ul>

            {/* button */}
            <button
              className="mt-10 flex cursor-pointer items-center gap-[0.1px] font-rubik font-medium text-sm leading-11.75 tracking-[0.5px] px-6 py-3 rounded-full border border-[#D9DDE0] hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 text-text2"
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