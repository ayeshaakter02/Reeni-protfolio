import React from 'react'
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


const App = () => {
  return (
    <ThemeProvider>
      <div className='bg-bg text-text'>
    <Navbar/>
    <Hero/>
    <Project/>
    <ProjectExperience/>
    <LatestService/>
    <SkillBar/>
    <Experience/>
    <ExperienceSection/>
    <Companies/>
    <Portfolio className="bg-light-gray"/>
    <MySkill/>
    </div>
    </ThemeProvider>
    
  )
}

export default App
