import React from 'react'

const project = () => {
  return (
    <div>
      <div className="container px-3.75 my-7.5 lg:my-22.5">
        <div className="sm:grid sm:grid-cols-2 md:flex justify-center place-items-center gap-2.5 lg:gap-7.5 mt-7.5">
          <div className='project-card'>
            <img className='project-img' src="./src/assets/images/web-design.png" alt="" />
            <h2 className='project-card-title'>Web Design</h2>
            <p className='project-card-para'>120 Projects</p>
          </div>
          <div className='project-card'>
            <img className='project-img' src="./src/assets/images/ui-ux-design.png" alt="" />
            <h2 className='project-card-title'>Ui/Ux Design</h2>
            <p className='project-card-para'>241 Projects</p>
          </div>
          <div className='project-card'>
            <img className='project-img' src="./src/assets/images/research-design.png" alt="" />
            <h2 className='project-card-title'>Web Research</h2>
            <p className='project-card-para'>240 Projects</p>
          </div>
          <div className='project-card'>
            <img className='project-img' src="./src/assets/images/marketing-design.png" alt="" />
            <h2 className='project-card-title'>Marketing</h2>
            <p className='project-card-para'>331 Prodect</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default project
