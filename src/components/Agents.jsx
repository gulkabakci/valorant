import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "../assets/fonts.css"
import { agents } from "../assets/agents";



const Agents = () => {

 const image = useRef();
 const li = useRef();

  const seeimage = () => {
    // image.current.style.height="200px";
  }


  return (
    <div className="pt-[200px] w-screen h-[1000px]  " style={{ color:" #fafafa", }}>

      <motion.ul  className="agent-ul " >
      {agents.map((agent) => (
          <motion.li initial={{width:"100px"}} whileHover={seeimage}  transition={{duration:1}} className="agent-li bg-center relative " key={agent.id} style={{ background: `url(${agent.background})`, backgroundSize: "cover", backgroundPosition: "center center",borderRadius:"20px",
         }} >
            <motion.img  transition={{duration:1}}  className=" mt-[50px]   agent-img" ref={image}  src={agent.image} alt={`Agent ${agent.id}`} style={{height:"500px"}} />
            <motion.h2   className="-rotate-90 absolute	bottom-5 inset-x-3 uppercase name	" style={{ fontFamily: " 'Secular One', sans-serif", color: "rgb(255, 255, 255)",display:"flex" }}>{agent.name}</motion.h2>
          </motion.li>
        ))}
      </motion.ul>

  


    </div>
    
  )
}

export default Agents