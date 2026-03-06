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


const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Project/>
    <ProjectExperience/>
    <LatestService/>
    <SkillBar/>
    <Experience/>
    <ExperienceSection/>
    <Companies/>
    <Portfolio/>
    </>
  )
}

export default App
