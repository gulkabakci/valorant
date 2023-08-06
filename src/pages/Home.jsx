import React from 'react'
import Chars from "../components/Chars"
import Deadlock from '../components/Deadlock'
import Intro from '../components/Intro'


const Home = () => {
  return (
    <div>
      <Intro/>
      <Deadlock />
      <Chars />
    </div>
  )
}

export default Home