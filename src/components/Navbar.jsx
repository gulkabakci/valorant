import { React, useRef } from 'react'
import logo2 from "../assets/logo.png"
import poster from "../assets/poster.png"
import "../assets/fonts.css"
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import Dropdown from 'react-bootstrap/Dropdown';

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

  const linkborder = (event) => {
    const element = event.target;
    element.style.borderBottom = "1px solid rgb(107 114 128)";
  }

  const backBorder = (event) => {
    const element = event.target;
    element.style.borderBottom = "none";
  }
  
  defineElement(lottie.loadAnimation);

  return (

    <div className='h-[110px] flex mb-40  text-xl z-40  items-center bg-gray-100	 sticky bgposter relative drop-shadow-lg' style={{ fontFamily: "'Bangers', cursive", }}  >
      <img className='mx-40 mt-1 h-[250px] ' src={logo2} style={{ borderRadius: "50px" }} />
      <ul className='flex justify-center	  '>
        <li className=' mx-5 cursor-pointer transition-all	' onMouseOver={biggerLink} onMouseOut={backNormal} >Oyun</li>
        <li className=' mx-5  cursor-pointer transition-all' onMouseOver={biggerLink} onMouseOut={backNormal}>Medya</li>
        <li className=' mx-5 cursor-pointer transition-all' onMouseOver={biggerLink} onMouseOut={backNormal}>Haberler</li>

        <div className=" dropdown bg-gray-100 ">
          <button className="btn border-none bg-gray-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <li className=' mx-5 cursor-pointer transition-all text-xl' onMouseOver={biggerLink} onMouseOut={backNormal}> Ajanlar
              <a> <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                <lord-icon
                  src="https://cdn.lordicon.com/rxufjlal.json"
                  trigger="hover"
                  colors="primary:#242424"
                  style={{ width: "30px", height: "30px" ,paddingTop:"7px"}}>
                </lord-icon></a>
            </li>
          </button>
          <ul class="dropdown-menu dropdown-menu-end w-[500px]" > 
          <div className=' ajanlar flex justify-evenly bg-gray-100 '>
         <p> <span style={{fontFamily: " 'Rubik', sans-serif"}} className='pl-[10px] '>Düellocu</span>
            <li><a class="dropdown-item" onMouseOver={linkborder} onMouseOut={backBorder}  href="#">Jett</a></li>
            <li><a class="dropdown-item" onMouseOver={linkborder} onMouseOut={backBorder}  href="#">Raze</a></li>
            <li><a class="dropdown-item" onMouseOver={linkborder} onMouseOut={backBorder}  href="#">Phoenix</a></li>
            <li><a class="dropdown-item" onMouseOver={linkborder} onMouseOut={backBorder}  href="#">Reyna</a></li>
            <li><a class="dropdown-item" onMouseOver={linkborder} onMouseOut={backBorder}  href="#">Neon</a></li>
            <li><a class="dropdown-item" onMouseOver={linkborder} onMouseOut={backBorder}  href="#">Yoru</a>  </li>

            </p>
            <p><span style={{fontFamily: " 'Rubik', sans-serif",}} className='pl-[15px]' >Öncü</span>
            <li><a class="dropdown-item" onMouseOver={linkborder} onMouseOut={backBorder}  href="#">Breach</a></li>
            <li><a class="dropdown-item"onMouseOver={linkborder} onMouseOut={backBorder}  href="#">Sova</a></li>
            <li><a class="dropdown-item" onMouseOver={linkborder} onMouseOut={backBorder}  href="#">Fade</a></li>
            <li><a class="dropdown-item" onMouseOver={linkborder} onMouseOut={backBorder}  href="#">Skye</a></li>
            <li><a class="dropdown-item" onMouseOver={linkborder} onMouseOut={backBorder}  href="#">Kay/o</a></li>
              </p>
            <p> <span style={{fontFamily: " 'Rubik', sans-serif"}}> Kontrol Uzmanı</span>
            <li><a class="dropdown-item" onMouseOver={linkborder} onMouseOut={backBorder}  href="#">Omen</a></li>
            <li><a class="dropdown-item" onMouseOver={linkborder} onMouseOut={backBorder}  href="#">Brimstone</a></li>
            <li><a class="dropdown-item" onMouseOver={linkborder} onMouseOut={backBorder}  href="#">Astra</a></li>
            <li><a class="dropdown-item" onMouseOver={linkborder} onMouseOut={backBorder}  href="#">Viper</a></li></p>
            <p> <span style={{fontFamily: " 'Rubik', sans-serif"}} className='pl-[20px]' >Gözcü</span>
            <li><a class="dropdown-item" onMouseOver={linkborder} onMouseOut={backBorder}  href="#">Sage</a></li>
            <li><a class="dropdown-item" onMouseOver={linkborder} onMouseOut={backBorder}  href="#">Chamber</a></li>
            <li><a class="dropdown-item" onMouseOver={linkborder} onMouseOut={backBorder}  href="#">Cyper</a></li>
            <li><a class="dropdown-item" onMouseOver={linkborder} onMouseOut={backBorder}  href="#">Killjoy</a></li></p></div>
          </ul>
        </div>



        <li className=' mx-5 cursor-pointer transition-all' onMouseOver={biggerLink} onMouseOut={backNormal}>Haritalar
          <a> <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
            <lord-icon 
              src="https://cdn.lordicon.com/rxufjlal.json"
              trigger="hover"
              colors="primary:#242424"
              style={{ width: "30px", height: "30px",paddingTop:"7px" }}>
            </lord-icon></a></li>
      </ul>
    </div>

  )
}



export default Navbar