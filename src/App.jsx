import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Project from './Section/Project'
import ProjectExperience from './Section/ProjectExperience'
import LatestService from './Section/LatestService'
import SkillBar from './Section/SkillBar'
import Experience from './Section/Experience'
import ExperienceSection from './Section/ExperienceSection'
import Companies from './Section/Companies'
import Portfolio from './Section/Protfolio'
import Hero from './Section/Hero'
import ThemeProvider from './provider/ThemeProviver'
import MySkill from './Section/MySkill'
import Pricing from './Section/Pricing'
import Testimonial from './Section/Testimonial'
import Blog from './Section/Blog'
import Footer from './Components/Footer'


const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider>
      <div className='bg-bg text-text'>
    <Navbar open={open} setOpen={setOpen}/>
    <Hero open={open} setOpen={setOpen}/>
    <Project/>
    <ProjectExperience/>
    <LatestService/>
    <SkillBar/>
    <Experience/>
    <ExperienceSection/>
    <Companies/>
    <Portfolio/>
    <MySkill/>
    <Pricing/>
    <Testimonial/>
    <Blog/>
    <Footer open={open} setOpen={setOpen}/>
    </div>
    </ThemeProvider>
    
  )
}

export default App
