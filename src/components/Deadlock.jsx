import { React, useRef, useEffect } from 'react'
import txt from "../assets/deadlock-txt.webp"
import deadlock from "../assets/deadlock.png"
import sticker from "../assets/deadlock-sticker.webp"
import { motion } from "framer-motion"
import { fadeIn, textVariant } from '../assets/motion';
import { useInView } from "framer-motion"


const Deadlock = () => {

const container= useRef(null);



  return (
    <div ref={container} className='mr-20' >
    <div className='h-screen w-screen relative mt-5 '  >
      <div className='pt-[50px]'>
        <p className=' text-left uppercase ml-[120px]  ' style={{ fontFamily: "'Raleway', sans-serif;", color: "#fc3e4e", fontSize: "45px", fontWeight: "bolder", }} > Yenİ Ajan DEADLOCK <br/> İle tanışın </p>
        <div className='flex '   >
          <motion.div className='max-w-[25%] z-1 text-left mt-24 ml-[170px]   p-12 text-slate-700 z-10	' style={{ fontFamily: "'Signika Negative', sans-serif", fontSize: "20px", fontWeight: "300", borderLeft: "2px solid #cbd5e0" ,zIndex:"-1"}}  > <p>Norveçli ajan Deadlock, savaş esnasında en ölümcül saldırıları bile savuşturabilecek son teknoloji bir nanobağ ağı kullanır. Keskin gözlerinden kaçan, vahşetinden kurtulan olmamıştır.</p></motion.div>
          <div className='flex ' >
            <motion.img initial={{ x: -150,opacity:0 }}
              whileInView={{ x: 0,opacity:1 }}
              transition={{ duration: 2,delay:1 }} src={txt} className='h-[100%] absolute top-[50px] right-[300px] ' />
            <motion.img initial={{ x: 200 , }}
              whileInView={{ x: 0.5 ,}}
              transition={{ duration: 2,delay:1}} src={deadlock} className='h-[100%] absolute  top-[10px] right-[40px] ' /></div>
        </div>
      </div>
    </div>
    <motion.img src={sticker} className='h-[120px] 	' style={{zIndex:"100"}} drag whileDrag={{ scale: 1.2 }} dragPropagation   dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
 dragConstraints={container} dragElastic={false} />

    </div>
  )
}

export default Deadlock