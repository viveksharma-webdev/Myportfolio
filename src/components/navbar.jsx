

const navbar = () => {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 font-["Neue Montreal"] flex justify-between items-center'>
        <div className="logo">
        <h1 className="font-['Test Founders Grotesk X-Cond SmBd'] text-[3vh] font-bold">
                VS
            </h1>
        </div>
        <div className="links">
            <h1 className="text-regular capitalize font-light cursor-pointer  "><a href="https://www.linkedin.com/in/vivek-sharma-549vs/" className="px-3 py-3 border-zinc-300 border-[1px] rounded-[30px]">contact me</a></h1>
        </div>
    </div>
  )
}

export default navbar