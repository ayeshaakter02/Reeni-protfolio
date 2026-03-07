import { FaQuoteLeft } from "react-icons/fa";
import { SiComma } from "react-icons/si";
import testimonial from "../assets/images/testimonial-icon.png";

const Testimonial = () => {
  return (
    <section className="container px-3.75">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="common-title">
          Our Testimonial
        </p>

        <h2 className="common-heading mb-15">
          Enhancing Collaboration <br /> between Remote
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-7.5">

        {/* Card 1 */}
        <div className="bg-light-gray rounded-3xl pt-9.5 pl-9.5 pb-[38.39px] relative border-b-4 border-red-500">
            <div className="flex">
                <img src={testimonial} alt="" />
            </div>
          

          <p className="text-5Dgray leading-[30.6px] font-normal text-lg font-rubik mt-[42.39px] mb-[36.98px]">
            A personal portfolio is a curated collection of an individual's
            professional work, showcasing their skills. A personal portfolio
            is a curated collection of an individual's professional work.
          </p>

          <h4 className="font-bold text-lg leading-[20.5px]">
            Cameron Williamson
          </h4>

          <p className="font-rubik text-sm leading-[22.4px] font-normal text-5Dgray mt-2.75">
            Ui/Ux Designer
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-light-gray rounded-3xl p-8 relative border-b-4 border-red-500">

          <div className="flex">
                <img src={testimonial} alt="" />
            </div>

          <p className="text-5Dgray leading-[30.6px] font-normal text-lg font-rubik mt-[42.39px] mb-[36.98px]">
            A personal portfolio is a curated collection of an individual's
            professional work, showcasing their skills. A personal portfolio
            is a curated collection of an individual's professional work.
          </p>

          <h4 className="font-bold text-lg leading-[20.5px]">
            Cameron Williamson
          </h4>

          <p className="font-rubik text-sm leading-[22.4px] font-normal text-5Dgray mt-2.75">
            Ui/Ux Designer
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;