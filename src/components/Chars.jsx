import React from 'react'
import bg from "../assets/background.jpg"
import "../assets/fonts.css"
import video from "../assets/valorantbg.mp4"
import reyna from "../assets/Reyna.webp"
import brim from "../assets/brim.webp"
import jett from "../assets/jett.webp"
import sova from "../assets/sova.webp"
import viper from "../assets/viper.webp"

const Chars = () => {
  return (
    <div className=" h-screen -mt-12 relative mt-5 backgrounddiv 	">
  
      <div className='relative flex'>
        <div> <img src={viper} className='h-screen object-cover' /></div>
        <div> <img src={sova} className='h-screen object-cover' /></div>
        <div> <img src={reyna} className='h-screen object-cover' /></div>
        <div> <img src={jett} className='h-screen object-cover' /></div>

      </div>
    </div>
  )
}

export default Chars