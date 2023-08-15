import { React, useRef } from 'react'
import logo from "../assets/logo.png"
import logo2 from "../assets/2.logo.png"

import "../assets/fonts.css"
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import {motion} from "framer-motion"
import { navVariants } from '../assets/motion';

const Navbar = () => {


  const biggerLink = (event) => {
    const element = event.target;
    element.style.transform = "scale(1.2)";
    element.style.border = "none";

  }

  const backNormal = (event) => {
    const element = event.target;
    element.style.transform = "scale(1.0)";
  }

  
  defineElement(lottie.loadAnimation);



  return (
  

    <motion.div variants={navVariants} initial="hidden" animate="show" className='h-[100px] px-20 flex  text-xl z-[100] justify-between items-center w-screen bgposter ' style={{ fontFamily: "'Bangers', cursive", }}  >
      <div className=''>
      <img className='d-inline mt-1 ml-5 h-[45px] ' src={logo} />
      <img className='d-inline mt-1 ml-5 h-[20px] ' src={logo2}  /></div>

      <ul className='flex justify-center  '  >
        <li className=' mx-5  cursor-pointer transition-all	' onMouseOver={biggerLink} onMouseOut={backNormal} >Oyun</li>
        <li className=' mx-5  cursor-pointer transition-all' onMouseOver={biggerLink} onMouseOut={backNormal}>Medya</li>
        <li className=' mx-5  cursor-pointer transition-all' onMouseOver={biggerLink} onMouseOut={backNormal}>Haberler</li>
        <li className=' mx-5 cursor-pointer transition-all' onMouseOver={biggerLink} onMouseOut={backNormal}>Hakkımızda</li>
      </ul>
    </motion.div>

  )
}



export default Navbar