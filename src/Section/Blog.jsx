import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const Blog = () => {
  const blogs = [
    {
      img: "./src/assets/images/blog1.png",
      title: "Let's bring your ideas to life! Contact me, and let's",
    },
    {
      img: "./src/assets/images/blog2.png",
      title: "Inspiring the World, One Project at a Time for the man",
    },
    {
      img: "./src/assets/images/blog3.png",
      title: "Each one showcases my approach and dedication man",
    },
  ];

  return (
    <section className="container px-3.75">

      {/* heading */}
      <div className="text-center mb-14">
        <p className="text-red-500 font-semibold tracking-widest uppercase">
          Blog and News
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-700 mt-3">
          Elevating Personal Branding the <br />
          through Powerful Portfolios
        </h2>
      </div>

      {/* blog cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border border-light-gray rounded-3xl overflow-hidden group hover:border-white transition"
          >

            {/* image */}
            <div className="relative">
              <img
                src={blog.img}
                alt="blog"
                className="w-full h-64 object-cover"
              />

            </div>

            {/* content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-6">
                {blog.title}
              </h3>

              <button className="text-5Dgray text-sm font-medium flex items-center gap-2 group-hover:text-white transition">
                READ MORE →
              </button>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Blog;