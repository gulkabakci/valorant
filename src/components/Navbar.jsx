import {React,useRef} from 'react'
import logo2 from "../assets/logo.png"
import poster from "../assets/poster.png"
import "../assets/fonts.css"
const Navbar = () => {


const biggerLink = (event) =>  {
const element = event.target;
element.style.transform="scale(1.2)";
}

const backNormal = (event) =>  {
  const element = event.target;
  element.style.transform="scale(1.0)";
}

  return (
   
    <div  className='h-[110px] flex   text-xl z-10  items-center	bg-gray-200 sticky bgposter relative' style={{ fontFamily: "'Bangers', cursive",}}  >
      <img  className='mx-40 mt-1 h-[250px] ' src={logo2} style={{borderRadius:"50px" }} />
      <ul className='flex 	  '>
        <li className=' mx-5 cursor-pointer transition-all	' onMouseOver={biggerLink} onMouseOut={backNormal} >Oyun</li>
        <li className=' mx-5  cursor-pointer transition-all' onMouseOver={biggerLink} onMouseOut={backNormal}>Medya</li>
        <li className=' mx-5 cursor-pointer transition-all' onMouseOver={biggerLink} onMouseOut={backNormal}>Haberler</li>
        <li className=' mx-5 cursor-pointer transition-all' onMouseOver={biggerLink} onMouseOut={backNormal}>Sosyal</li>
        <li className=' mx-5 cursor-pointer transition-all' onMouseOver={biggerLink} onMouseOut={backNormal}>Espor</li>
      </ul> 
    </div>
      
  )
}


export default Navbar