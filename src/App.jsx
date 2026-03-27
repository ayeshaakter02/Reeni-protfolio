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
import Animation from './Section/CursorBorderCard'
import Sidebar from './Components/Sidebar'


const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider>
      <div className='bg-bg text-text'>
        <Sidebar open={open} setOpen={setOpen} />
    <Navbar open={open} setOpen={setOpen}/>
    <Hero open={open} setOpen={setOpen}/>
    <Project open={open} setOpen={setOpen}/>
    <ProjectExperience open={open} setOpen={setOpen}/>
    <LatestService open={open} setOpen={setOpen}/>
    <SkillBar open={open} setOpen={setOpen}/>
    <Experience open={open} setOpen={setOpen}/>
    <ExperienceSection open={open} setOpen={setOpen}/>
    <Companies open={open} setOpen={setOpen}/>
    <Portfolio open={open} setOpen={setOpen}/>
    <MySkill open={open} setOpen={setOpen}/>
    <Pricing open={open} setOpen={setOpen}/>
    <Testimonial open={open} setOpen={setOpen}/>
    <Blog open={open} setOpen={setOpen}/>
    <Footer open={open} setOpen={setOpen}/>
    <Animation/>
    </div>
    </ThemeProvider>
    
  )
}

export default App
