import React from 'react'
import Section from "../components/Section"
import Deadlock from '../components/Deadlock'
import Intro from '../components/Intro'
import Agents from '../components/Agents'


const Home = () => {
  
  return (
    <div>
      <Intro/>
      <Agents/>
      <Deadlock />
      <Section />
    </div>
  )
}

export default Home