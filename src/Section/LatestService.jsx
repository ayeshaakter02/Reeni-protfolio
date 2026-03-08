import React from "react";
import latestUserImage from "../assets/images/latest-user-image.png";

const LatestService = () => {
  return (
    <section className="mt-15 lg:mt-[120.47px] mb-[60.3px] lg:mb-[120.5px] px-3.75 xl:px-0 bg-diff text-text">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center mb-15">
          <p className="common-title">
            Latest Service
          </p>

          <h2 className="common-heading">
            Inspiring The World One Project
          </h2>

          <p className="max-w-156.75 mt-[9.5px] text-5Dgray text-base mx-auto font-normal leading-6.5 font-rubik">
            Business consulting consultants provide expert advice and guida businesses to help
them improve their performance, efficiency, and organizational
          </p>
        </div>

        {/* Content */}
        <div className="lg:flex gap-10 xl:gap-25 justify-center place-items-center">

          {/* Left Side */}
          <div className="space-y-5 max-w-[622.5px]">

            {/* Card 1 */}
            <div className="card-border py-7.5 sm:py-9.5 px-3.75 sm:px-10.5">
              <h3 className="latest-card-title">
                01. &nbsp; A Portfolio of Creativity
              </h3>
              <p className="latest-card-para">
                Business consulting consultants provide expert advice and guida the a
businesses to help theme their performance efficiency
              </p>
            </div>

            {/* Card 2 */}
            <div className="card-border py-7.5 sm:py-9.5 px-3.75 sm:px-10.5">
              <h3 className="latest-card-title">
                02. &nbsp; My Portfolio of Innovation
              </h3>
              <p className="latest-card-para">
                My work is driven by the belief that thoughtful design and
                strategic planning can empower brands and transform businesses.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card-border py-7.5 sm:py-9.5 px-3.75 sm:px-10.5">
              <h3 className="latest-card-title">
                03. &nbsp; A Showcase of My Projects
              </h3>
              <p className="latest-card-para">
                In this portfolio, you'll find a curated selection of projects
                that highlight my skills in responsive web design.
              </p>
            </div>

          </div>

          {/* Right Side Image */}
          <div className="mt-7.5 lg:mt-0">
          <img src={latestUserImage} alt="" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default LatestService;