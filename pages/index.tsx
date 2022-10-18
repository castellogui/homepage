import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import logo from '../assets/logomarca-branco.png'
import logoMobile from '../assets/logo.png'
import wave from '../assets/svg/wave.svg'
import terminal from '../assets/svg/responsive/terminal.svg'
import AutoWrite from '../components/AutoWrite'
import MobileNavbar from '../components/MobileNavbar'
import Sprites from '../components/Sprites'
import { useEffect } from 'react'


const Home: NextPage = () => {
  useEffect(() => {
    const id = document.getElementById('terminal')
    id!.style.width = '100%'
  }, [])

  return (
    <div>
      <section id="home" className='bg-[#352575] w-full h-screen relative overflow-hidden'>
        <Navbar logo={logo}>
          <span>Home</span>
          <span>Sobre</span>
          <span>Serviços</span>
          <span>Portifólio</span>
          <span>Contato</span>
        </Navbar>
        <MobileNavbar logo={logoMobile}></MobileNavbar>
        <div style={{ height: 'calc(100% - 56px)' }} className="relative">
          <div className='inline-block mt-16 ml-16 md:ml-32 md:mt-32 relative z-10 w-[80%]'>
            <AutoWrite className='border-b-4 border-[#3fd1d3] mb-0 text-white text-lg md:text-5xl' typeSpeed={30} showCursor={false} loop={false} text={['Guilherme Castello']}></AutoWrite>
            <br></br>
            <br></br>
            <span className='text-3xl md:text-5xl font-[HermitBold]'>Sou </span><AutoWrite typeSpeed={40} showCursor={true} loop={true} className='text-[#3fd1d3]' text={['desenvolvedor!', 'apaixonado por tecnologia!', 'gamer!']}></AutoWrite>
            <br></br>
            <br></br>
          </div>
          <div className='w-[90%] m-auto md:m-0 md:w-[40%]'>
            <img src={terminal.src} id="terminal" className='relative md:ml-24 z-10 transition-all w-0 duration-300 delay-700'></img>
          </div>
          <Sprites></Sprites>
          <img src={wave.src} alt="wave" className='absolute bottom-0 z-20' />
        </div>
      </section>
      <section className='bg-[#F3F4F5] w-full h-screen relative'></section>
    </div>
  )
}

export default Home
