import { FaQuoteLeft } from "react-icons/fa";
import { SiComma } from "react-icons/si";

const Testimonial = () => {
  return (
    <section className="container py-16 px-4">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-red-500 font-semibold tracking-widest uppercase">
          Our Testimonial
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-700 mt-3">
          Enhancing Collaboration <br /> between Remote
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Card 1 */}
        <div className="bg-gray-200 rounded-3xl p-8 relative border-b-4 border-red-500">
            <div className="flex">
                <SiComma className="text-red-500 text-4xl mb-6 rotate-180" />
          <SiComma className="text-red-500 text-4xl mb-6 rotate-180" />
            </div>
          

          <p className="text-gray-600 leading-relaxed mb-8">
            A personal portfolio is a curated collection of an individual's
            professional work, showcasing their skills. A personal portfolio
            is a curated collection of an individual's professional work.
          </p>

          <h4 className="font-semibold text-gray-900">
            Cameron Williamson
          </h4>

          <p className="text-gray-500 text-sm">
            Ui/Ux Designer
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-200 rounded-3xl p-8 relative border-b-4 border-red-500">

          <div className="flex">
                <SiComma className="text-red-500 text-4xl mb-6 rotate-180" />
          <SiComma className="text-red-500 text-4xl mb-6 rotate-180" />
            </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            A personal portfolio is a curated collection of an individual's
            professional work, showcasing their skills. A personal portfolio
            is a curated collection of an individual's professional work.
          </p>

          <h4 className="font-semibold text-gray-900">
            Cameron Williamson
          </h4>

          <p className="text-gray-500 text-sm">
            Ui/Ux Designer
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;