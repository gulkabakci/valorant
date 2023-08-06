import React from 'react'
import video from "../assets/videoplayback.webm"
import "../assets/fonts.css"
import logo from "../assets/vlogo.png"
const Intro = () => {
  return (
    <div className=' h-[450px] flex justify-center pb-[20px] pt-[20px] overflow-hidden   '>
  <video  autoPlay muted loop id="video-background">
 <source src={video} type="video/webm" /> </video>
 <div className='flex justify-center 	' >
<div className=" z-40 wrap"> <img src={logo} /> ile akrakterinin gücünü keşfet
  <a className="btn-2" href="#">Hemen Oyna</a>
</div>
</div> 
    </div>
  )
}

export default Intro



