

const About = () => {
  return (
    <div className="w-full py-20 px-20 bg-[#CDEA68] text-black ">
        <h1 className="font-['Test Founders Grotesk X-Cond SmBd'] text-6xl -leading-1 ">Passionate Full-Stack MERN Developer dedicated to crafting seamless web experiences.</h1>
        <div className="w-full mt-[10vh] border-t-[2px] py-10 border-[black] flex justify-between">
            <div className="w-[50%] text-[3vw] font-medium">What you can expect:</div>
            <div className="w-[50%] h-[60vh] flex flex-col gap-10 items-center">
              <p className="text-4xl font-light ">As a Full-Stack MERN Developer, I deliver scalable, responsive web applications tailored to your needs. Clients can expect clean, efficient code, seamless user experiences, and timely project delivery. I prioritize clear communication and a collaborative approach to bring your vision to life.</p>
              <p className="text-4xl font-light ">I stay up-to-date with the latest technologies to ensure your project is built using modern, reliable solutions. From intuitive front-end designs to robust back-end architectures, I focus on quality and performance.</p>
            </div>
        </div>
    </div>
  )
}

export default About