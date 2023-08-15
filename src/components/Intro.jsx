import React from 'react'
import "../assets/fonts.css"
import logo from "../assets/valorantlogo.png"
import intro from "../assets/intro.png"
import { faPlay,faLaptop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"
import { planetVariants, navVariants } from '../assets/motion';


// #fc3b4b
const Intro = () => {

  const footerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        delay: 0.5,
      },
    },
  };

  return (
    <div className=' h-[550px] flex  justify-evenly w-screen relative  '>
      <div className=' my-auto ml-8 '>
        <motion.p initial={{ y: 50, opacity: 0, }} whileInView={{ y: 0, opacity: 1, }} transition={{ type: 'spring', duration: 2,delay:4 }} className='text-left' style={{ fontFamily: "'Signika Negative', sans-serif", fontWeight: "600", fontSize: "15px" }}>Riot Games'den</motion.p>
        <motion.img initial={{ y: 50, opacity: 0, }} whileInView={{ y: 0, opacity: 1, }} transition={{ type: 'spring', duration: 5, }} className=' max-w-[450px] d-inline mt-3' src={logo} />
        <motion.p initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2 }}
          className='max-w-[470px] my-5 ' style={{ fontFamily: "'Signika Negative', sans-serif", fontSize: "18px", }} >Tetikte bekleyen eşsiz yeteneklere sahip ajanlarla dolu bu arenada sadece mermiler değil, aynı zamanda zekâ da ateşleniyor!</motion.p>
        <div className='flex justify-evenly'> <motion.button
          style={{ fontFamily: " 'Secular One', sans-serif", color: "#323232" }} className='btn button-paper p-3 px-4 rounded-full	border-[1px]	border-zinc-400	 uppercase	'><FontAwesomeIcon icon={faLaptop} style={{color: "#ff4655"}} /> &nbsp; Ücretsİz oyna</motion.button>
          <motion.button 
            style={{ fontFamily: " 'Secular One', sans-serif", color: "#323232" }} className='btn button-paper p-3 px-4 rounded-full	border-[1px]	border-zinc-400	uppercase'> <FontAwesomeIcon icon={faPlay} style={{ color: "#ff4655" }} /> &nbsp; İzle</motion.button></div>

      </div>
      <motion.div initial={{ x: 300 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2 }}
      > <img className='max-h-[550px] ' src={intro} /> </motion.div>
    </div>
  )
}

export default Intro



