import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 100 }}  
      whileInView={{ opacity: 50, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`transition-all duration-400 container py-30 px-3.75 ${
        open ? "opacity-25" : "opacity-100"
      }`}
      onClick={() => open && setOpen(false)}
    >
      
      {/* heading */}
      <div className="text-center">
        <p className="common-title">Blog and News</p>

        <h2 className="common-heading mb-15">
          Elevating Personal Branding the <br />
          through Powerful Portfolios
        </h2>
      </div>

      {/* blog cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 50, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
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

              <button className="cursor-pointer text-5Dgray font-rubik text-[13px] mt-4 flex items-center gap-2">
                READ MORE →
              </button>
            </div>
          </motion.div>
        ))}

      </div>
    </motion.div>
  );
};

export default Blog;