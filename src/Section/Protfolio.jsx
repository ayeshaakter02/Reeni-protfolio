import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Portfolio = () => {
  return (
    <section className="bg-light-gray pt-25 pb-30">
      <div className="container px-3.75">
        {/* Section Title */}
        <div className="text-center">
          <p className="Protfolio-latest">Latest Portfolio</p>

          <h2 className="Protfolio-heading">
            Transforming Ideas into Exceptional
          </h2>

          <p className="Protfolio-para mb-15">
            Business consulting consultants provide expert advice and guida
            businesses to help them improve their performance, efficiency, and
            organizational
          </p>
        </div>

        {/* Grid */}
        <div className=" xl:grid xl:grid-cols-2 gap-7.5 xl:gap-11">
          {/* Card 1 */}
          <div>
            <div className="Protfolio-img-card">
              <img
                src="./src/assets/images/portfolio1.png"
                className="rounded-[20px] w-full xl:max-w-[568.5px]"
                alt=""
              />
            </div>

            <div className="flex justify-between items-center mt-8.75 sm:px-10 xl:px-0">
              <div>
                <h3 className="Protfolio-title">My Journey as a Creator</h3>
                <p className="Protfolio-category">Development Coaches</p>
              </div>

              <div className="Protfolio-btn">
                <FiArrowUpRight className="text-2xl hover:text-4xl transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* Card 2 (Down offset) */}
          <div className="mt-7.5 xl:mt-25 xl:ml-1">
            <div className="Protfolio-img-card">
              <img
                src="./src/assets/images/portfolio2.png"
                className="rounded-[20px] w-full xl:max-w-[568.5px]"
                alt=""
              />
            </div>

            <div className="flex justify-between items-center mt-8.25 sm:px-10 xl:px-0">
              <div>
                <h3 className="Protfolio-title">My Professional Portfolio</h3>
                <p className="Protfolio-category">Development Coaches</p>
              </div>

              <div className="Protfolio-btn">
                <FiArrowUpRight className="text-2xl hover:text-4xl transition-all duration-500"/>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div>
            <div className="Protfolio-img-card">
              <img
                src="./src/assets/images/portfolio3.png"
                className="rounded-[20px] w-full xl:max-w-[568.5px]"
                alt=""
              />
            </div>

            <div className="flex justify-between items-center mt-8.25 sm:px-10 xl:px-0">
              <div>
                <h3 className="Protfolio-title">My Portfolio of Innovation</h3>
                <p className="Protfolio-category">App Development</p>
              </div>

              <div className="Protfolio-btn">
                <FiArrowUpRight className="text-2xl hover:text-4xl transition-all duration-500"/>
              </div>
            </div>
          </div>

          {/* Card 4 (Down offset) */}
          <div className="xl:mt-25">
            <div className="Protfolio-img-card">
              <img
                src="./src/assets/images/portfolio4.png"
                className="rounded-[20px] w-full xl:max-w-[568.5px]"
                alt=""
              />
            </div>

            <div className="flex justify-between items-center mt-8.25 sm:px-10 xl:px-0">
              <div>
                <h3 className="Protfolio-title">
                  A Portfolio of Creativity and Passion
                </h3>
                <p className="Protfolio-category">Business Development</p>
              </div>

              <div className="Protfolio-btn">
                <FiArrowUpRight className="text-2xl hover:text-4xl transition-all duration-500"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
