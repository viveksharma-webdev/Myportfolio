import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Marquee = () => {
  useGSAP(()=>{
    gsap.from('.marquee',{
      xPercent:-100,
      duration: 15,
      ease: 'linear',
      repeat: -1,
    })
  })
  return (
    <div className=" marquee-container w-full  py-10 bg-[#758b26] rounded-t-[10px] ">
        <div className=" marquee text flex w-[350vw] whitespace-nowrap  gap-5 rounded-t-[10px] ">
            <h1  className=" text-[20vw] leading-none font-['Test Founders Grotesk X-Cond SmBd'] font-bold ">.MONGODB</h1>
            <h1  className=" text-[20vw] leading-none font-['Test Founders Grotesk X-Cond SmBd'] font-bold ">.EXPRESS</h1>
            <h1  className=" text-[20vw] leading-none font-['Test Founders Grotesk X-Cond SmBd'] font-bold ">.NODE</h1>
            <h1  className=" text-[20vw] leading-none font-['Test Founders Grotesk X-Cond SmBd'] font-bold ">.REACT</h1>
            <h1  className=" text-[20vw] leading-none font-['Test Founders Grotesk X-Cond SmBd'] font-bold ">.MONGODB</h1>
            <h1  className=" text-[20vw] leading-none font-['Test Founders Grotesk X-Cond SmBd'] font-bold ">.EXPRESS</h1>
            <h1  className=" text-[20vw] leading-none font-['Test Founders Grotesk X-Cond SmBd'] font-bold ">.NODE</h1>
            <h1  className=" text-[20vw] leading-none font-['Test Founders Grotesk X-Cond SmBd'] font-bold ">.REACT</h1>
            <h1  className=" text-[20vw] leading-none font-['Test Founders Grotesk X-Cond SmBd'] font-bold ">.MONGODB</h1>
            <h1  className=" text-[20vw] leading-none font-['Test Founders Grotesk X-Cond SmBd'] font-bold ">.EXPRESS</h1>
            <h1  className=" text-[20vw] leading-none font-['Test Founders Grotesk X-Cond SmBd'] font-bold ">.NODE</h1>
            <h1  className=" text-[20vw] leading-none font-['Test Founders Grotesk X-Cond SmBd'] font-bold ">.REACT</h1>
        </div>
       
    </div>
  )
}

export default Marquee