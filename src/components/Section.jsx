import React from 'react'
import "../assets/fonts.css"
import video from "../assets/bg-video.mp4"
import { faPlay,faLaptop, faEarthAmerica } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"




const Chars = () => {

 

  return (
    <div className=" mt-5 relative drop-shadow-2xl	">
      <div className='absolute top-[100px] mx-5 left-12 z-20 w-[40%]' >
              <p className=' text-left uppercase   ' style={{ fontFamily: "'Raleway', sans-serif", color: "#ff4655", fontSize: "35px", fontWeight: "bolder", }} > Taktİksel Aksİyonun Zİrvesİ </p>
              <p className='mt-3 text-left' style={{ fontFamily: "'Signika Negative', sans-serif", fontSize: "18px", }} >Adrenalin dolu taktikler, unutulmaz anlar ve sınırsız eğlence... Valorant ile en iyi nişancı deneyimini yaşa. Kendini özgürce ifade et ve rekabetin doruklarına ulaş. <br/><br/> </p>
              <motion.button 
            style={{ fontFamily: " 'Secular One', sans-serif", color: "#323232" }} className='btn button-paper p-3 px-4 rounded-full	border-[1px]	border-zinc-400	uppercase'> <FontAwesomeIcon icon={faEarthAmerica} style={{ color: "#ff4655" }} /> &nbsp; Daha Fazla Keşfet</motion.button>
              </div>
        <video  className='  w-screen  z-10' autoPlay muted loop id="video-background" style={{ height: "550px", objectFit: "cover" }}>
 <source src={video} type="video/mp4" /> </video>

    </div>
  )
}

export default Chars