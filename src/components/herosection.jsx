
import { MdArrowOutward } from "react-icons/md";

const Herosection = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
        <div className="textstructure mt-52 px-20">
            <div className="masker">
               <h1 className="uppercase text-[7.5vw] font-medium leading-[6.5vw] tracking-tighter font-['Test Founders Grotesk X-Cond SmBd'] ">I Create</h1>
            </div>
            <div className="masker">
               <h1 className="uppercase text-[7.5vw] font-medium leading-[6.5vw] tracking-tighter font-['Test Founders Grotesk X-Cond SmBd'] ">Eye-Opening</h1>
            </div>
            <div className="masker">
               <h1 className="uppercase text-[7.5vw] font-medium leading-[6.5vw] tracking-tighter font-['Test Founders Grotesk X-Cond SmBd'] ">Web Application</h1>
            </div>
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
            {["Front-End: HTML, CSS, JS, GSAP, LOCOMOTIVE, LENIS, 3JS","Back-End: Node, Express, MongoDB, MySQL, RESTAPI's"].map((item,index)=>(
                <p key={index} className="text-md font-light leading-none tracking-tighter">{item}</p>
                ))}
                <div className="start flex items-center gap-2">
                    <div className="px-5 py-2 font-light text-md border-[2px] border-zinc-600 capitalize rounded-full "><a href="https://www.linkedin.com/in/vivek-sharma-549vs/">Hire Me</a></div>
                    <div className="w-10 h-10 border-[2px] border-zinc-600 rounded-full flex items-center justify-center">
                    <MdArrowOutward />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Herosection