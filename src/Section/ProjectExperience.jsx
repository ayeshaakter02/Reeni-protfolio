import React from 'react'

const ProjectExperience = ({ open, setOpen }) => {
  return (
        <div  onClick={() => open && setOpen(false)}>
        <div className="container px-3.75 mt-7.5">
            <div className="lg:flex lg:gap-7.5 justify-center place-items-center">
                <div className='max-w-[622.5px] pt-7.5 lg:pt-9 px-5 lg:px-13 bg-diff rounded-[20px]'>
                    <div className="sm:flex max-h-51 gap-10 lg:gap-[65.61px] items-center">
                        <div class="max-w-[185.78px] text-tomato text-[111.26px] md:text-[130px] xl:text-[160px] font-bold flex sm:justify-center sm:items-center font-inter">
                            25
                        </div>
                        <h2 className='text-[26px] sm:text-4xl lg:text-[48.1px] font-bold leading-[33.8px] xl:leading-[62.6px] text-text sm:my-6 lg:my-[39.23px]'>Years Of experience</h2>
                    </div>
                    <p className='font-rubik md:text-sm xl:text-base font-normal  text-text leading-6.5 pb-7.5 sm:pb-8 lg:pb-12.75 mt-3 sm:mt-0 lg:mt-3'>
                        Business consulting consultants provide expert advice and guida the
a businesses to help theme their performance efficiency
                    </p>
                </div>
                <div className="sm:flex gap-3 xl:gap-7.5">
                    <div>
                        <div className='experience-rate card-border bg-diff'>
                            <h2 className='experience-rate-count text-text'><span className='font-inter '>20</span>K+</h2>
                    <p className='experience-rate-para'>Our Project Complete</p>
                        </div>
                        <div className='experience-rate card-border mt-7.5 bg-diff'>
                            <h2 className='experience-rate-count font-inter text-text'>200+</h2>
                    <p className='experience-rate-para'>Clients Reviews</p>
                        </div>
                    </div>
                    <div>
                        <div className='experience-rate card-border bg-diff'>
                            <h2 className='experience-rate-count text-text'><span className='font-inter'>10</span>K+</h2>
                    <p className='experience-rate-para'>Our Natural Products</p>
                        </div>
                        <div className='experience-rate card-border mt-7.5 bg-diff '>
                            <h2 className='experience-rate-count font-inter text-text'>1,000+</h2>
                    <p className='experience-rate-para'>our Satisfied Clientd</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectExperience