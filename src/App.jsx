import React from 'react'
import Navbar from './Components/Navbar'
import Project from './Section/Project'
import ProjectExperience from './Section/ProjectExperience'
import LatestService from './Section/LatestService'
import SkillBar from './Section/SkillBar'
import Experience from './Section/Experience'
import ExperienceSection from './Section/ExperienceSection'
import Companies from './Section/Companies'


const App = () => {
  return (
    <>
    <Navbar/>
    <Project/>
    <ProjectExperience/>
    <LatestService/>
    <SkillBar/>
    <Experience/>
    <ExperienceSection/>
    <Companies/>
    </>
  )
}

export default App
