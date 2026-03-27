import React from 'react'
import webDesign from "/images/web-design.png";
import UiUxDesign from "/images/ui-ux-design.png";
import researchDesign from "/images/research-design.png";
import marketingDesign from "/images/marketing-design.png";


const project = ({ open, setOpen }) => {
  return (
    <div  className={`transition-all duration-300 ${
          open ? "opacity-25" : "opacity-100"
        }`}
        onClick={() => open && setOpen(false)}>
      <div className="container px-3.75 py-7.5 xl:mt-121.75 lg:pb-22.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex justify-center place-items-center gap-2.5  lg:gap-7.5 xl:pt-7.5">
          <div className='project-card'>
            <img className='project-img' src={webDesign} alt="" />
            <h2 className='project-card-title'>Web Design</h2>
            <p className='project-card-para'>120 Projects</p>
          </div>
          <div className='project-card'>
            <img className='project-img' src={UiUxDesign} alt="" />
            <h2 className='project-card-title'>Ui/Ux Design</h2>
            <p className='project-card-para'>241 Projects</p>
          </div>
          <div className='project-card'>
            <img className='project-img' src={researchDesign} alt="" />
            <h2 className='project-card-title'>Web Research</h2>
            <p className='project-card-para'>240 Projects</p>
          </div>
          <div className='project-card'>
            <img className='project-img' src={marketingDesign} alt="" />
            <h2 className='project-card-title'>Marketing</h2>
            <p className='project-card-para'>331 Prodect</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default project
