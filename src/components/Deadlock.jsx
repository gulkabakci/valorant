import React from 'react'
import txt from "../assets/deadlock-txt.webp"
import deadlock from "../assets/deadlock.png"

const Deadlock = () => {
  return (

    <div className=' deadlockbg h-screen bg-gray-200 relative mt-5 ' >
      <div className='pt-[50px]'>
        <p className=' text-start uppercase ml-[120px]  ' style={{ fontFamily: " 'Secular One', sans-serif",color:"#e14e5a", fontSize: "45px", fontWeight: "bolder", }} > Yeni Ajan Alarmı </p>
        <div className='flex '>
          <div className='max-w-[25%] z-20 text-center mt-24 ml-[170px] bg-gray-300  p-12 ' style={{ fontFamily: "'Dosis', sans-serif", fontSize: "20px", }}  > <p>Norveçli ajan Deadlock, savaş esnasında en ölümcül saldırıları bile savuşturabilecek son teknoloji bir nanobağ ağı kullanır. Keskin gözlerinden kaçan, vahşetinden kurtulan olmamıştır.</p></div>
          <div className='h-[40%] z-10  w-[25%] bg-gray-400 absolute top-[250px] left-[120px]'></div>
          <div className='flex ' > <img src={txt} className='h-[100%] absolute top-[50px] right-[300px] drop-shadow-2xl ' />  <img src={deadlock} className='h-[100%] absolute  top-[10px] right-[40px] ' /></div>
        </div>
      </div>
    </div>

  )
}

export default Deadlock