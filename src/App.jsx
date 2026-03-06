import React from 'react'
import Navbar from './Components/Navbar'
import Project from './Section/Project'
import Experience from './Section/Experience'
import LatestService from './Section/LatestService'
import SkillBar from './Section/SkillBar'

const App = () => {
  return (
    <>
    <Navbar/>
    <Project/>
    <Experience/>
    <LatestService/>
    <SkillBar/>
    </>
  )
}

export default App
