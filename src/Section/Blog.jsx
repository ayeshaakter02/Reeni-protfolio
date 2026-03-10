import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const Blog = ({ open, setOpen }) => {
  const blogs = [
    {
      img: "/images/blog1.png",
      title: "Let's bring your ideas to life! Contact me, and let's",
    },
    {
      img: "/images/blog2.png",
      title: "Inspiring the World, One Project at a Time for the man",
    },
    {
      img: "/images/blog3.png",
      title: "Each one showcases my approach and dedication man",
    },
  ];

  return (
    <section  onClick={() => open && setOpen(false)} className="container py-30 px-3.75">

      {/* heading */}
      <div className="text-center">
        <p className="common-title">
          Blog and News
        </p>

        <h2 className="common-heading  mb-15">
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
                className="w-full h-64 rounded-2xl object-cover"
              />

            </div>

            {/* content */}
            <div className="py-[30.34px] pl-7.5">
              <h3 className="font-bold leading-7.5 text-2xl">
                {blog.title}
              </h3>

              <button className="cursor-pointer text-5Dgray font-rubik text-[13px] font-normal leading-6.75 mt-4 flex items-center gap-2 transition">
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