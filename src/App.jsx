
import Navbar from './components/navbar'
import Herosection from './components/herosection'
import Marquee from './components/marquee'
import About from './components/about'
import Featured from './components/featured'
import Footer from './components/footer'
import LocomotiveScroll from 'locomotive-scroll';
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white '>
      <Navbar/>
      <Herosection/>
      <Marquee/>
      <About/>
      <Featured/>
      <Footer/>
    </div>
  )
}

export default App