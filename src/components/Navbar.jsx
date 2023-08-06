import React from 'react'
import logo2 from "../assets/valorant-animation.gif"
import poster from "../assets/poster.png"
import "../assets/fonts.css"
const Navbar = () => {

  return (
    <div className='h-20 flex  text-white  text-xl z-10	bg-black sticky bgposter relative' style={{ fontFamily: "'Bangers', cursive",}}  >
      <img  className='mx-60 mt-1 h-[100px]' src={logo2} style={{borderRadius:"50px" }} />
      <ul className='flex items-center mt-5	  '>
        <li className='mx-5 cursor-pointer'>Oyun</li>
        <li className='mx-5  cursor-pointer'>Medya</li>
        <li className='mx-5 cursor-pointer'>Haberler</li>
        <li className='mx-5 cursor-pointer'>Sosyal</li>
        <li className='mx-5 cursor-pointer'>Espor</li>
      </ul> 
    
    </div>
   
      
  )
}


export default Navbar