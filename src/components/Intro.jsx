import React from 'react'
import video from "../assets/video.mp4"
import "../assets/fonts.css"
import logo from "../assets/valorantlogo.png"

const Intro = () => {
  return (
    <div className='bg h-[550px]  flex justify-center  relative  backgrounddiv'>
      <div  className='absolute top-[110px] left-[40px] border2 w-[810px] uppercase '> <p style={{fontFamily: " 'Rubik', sans-serif",fontSize:"50px",textAlign:"left",}}>&nbsp;&nbsp; Karakterİnİn gücünü <br/>  &nbsp;&nbsp;<img className='h-10 d-inline' src={logo} /> İle keşfet</p>
</div>
  <video className='-mr-[600px] z-20 ' autoPlay muted loop id="video-background">
 <source src={video} type="video/mp4" /> </video>
<div className='triangle absolute top-[299px] right-[680px] z-50' > </div>
    </div>
  )
}

export default Intro



