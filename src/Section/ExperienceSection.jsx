import React from "react";

const ExperienceSection = () => {
  return (
    <section>
      <div className="container mx-auto px-7.5 lg:px-3.75">

        <div className="lg:flex gap-10 xl:gap-28">

          {/* Left Image */}
          <div className="w-full flex justify-center">
            <img
              src="/src/assets/images/experience.png"
              alt="experience"
              className="rounded-[20px] lg:max-w-[622.5px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="mt-7.5 lg:mt-0 xl:pr-34.5">

            {/* Title */}
            <div className="flex items-center gap-4 mb-8 sm:mb-4 xl:mb-8">
              <h2 className="text-[32px] leading-10.5 font-bold">
                Experiences
              </h2>

              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-5Dgray rounded-full"></span>
                <span className="w-17.25 h-0.5 bg-5Dgray"></span>
                <span className="w-1.5 h-1.5 bg-5Dgray rounded-full"></span>
            </div>
            </div>

            {/* Experience Item */}
            <div className="mb-7.5 xl:mb-12.5">
              <p className="ExperienceSection-exp">
                experience
              </p>

              <h3 className="ExperienceSection-name">
                Fatima Asrafy
              </h3>

              <p className="ExperienceSection-dept">
                UI/UX Designer
              </p>

              <p className="ExperienceSection-para">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum desi dolore eu fugiat nulla pariatu Duis aute irure
              </p>
            </div>

            {/* Experience Item */}
            <div>
              <p className="ExperienceSection-exp">
                experience
              </p>

              <h3 className="ExperienceSection-name">
                Fatima Asrafy
              </h3>

              <p className="ExperienceSection-dept">
                UI/UX Designer
              </p>

              <p className="ExperienceSection-para">
                Interested in working together? Let’s bring your ideas to
life! Contact me, and let’s start building something.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;