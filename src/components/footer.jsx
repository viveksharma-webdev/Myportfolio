import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#CDEA68] text-black w-full h-[50vh] p-20 z-40 flex justify-between items-start mt-[10vh] ">
        <div className="left w-[40%] h-full flex justify-start items-center p-20">
            <h1 className="font-['Test Founders Grotesk X-Cond SmBd'] text-[30vh] font-bold">
                VS
            </h1>
            </div>
        <div className="right w-[60%] h-full flex flex-col justify-center items-center font-['Test Founders Grotesk X-Cond SmBd'] ">
        <h3 className="mb-5 text-[10vh] font-bold  font-['Test Founders Grotesk X-Cond SmBd']">DETAILS</h3>
        <a href="https://www.linkedin.com/in/vivek-sharma-549vs/" className=" text-[2.5vh] leading-1 tracking-tight font-medium flex gap-2 items-center"><FaLinkedin />LinkedIn</a>
        <a href="https://github.com/viveksharma-webdev" className=" text-[2.5vh] leading-1 tracking-tight font-medium flex items-center gap-2"><FaGithub />Github</a>
        <a href="https://x.com/Vivek_sharma455" className=" text-[2.5vh] leading-1 tracking-tight font-medium flex items-center gap-2 "><FaSquareXTwitter />X</a>
        <a href="" className=" text-[2.5vh] leading-1 tracking-tight font-medium ">vivek45559s@gmail.com</a>
        </div>
    </div>
  )
}

export default Footer