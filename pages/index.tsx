import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import logo from '../assets/logomarca-branco.png'
import wave from '../assets/svg/wave.svg'
import Lines from '../components/Lines'
import Computer from '../components/Computer'
import AutoWrite from '../components/AutoWrite'

const Home: NextPage = () => {
  console.log(wave);

  return (
    <div>
      <section className='bg-[#352575] w-full h-screen relative'>
        <Navbar logo={logo}>
          <span>Home</span>
          <span>Sobre</span>
          <span>Serviços</span>
          <span>Portifólio</span>
          <span>Contato</span>
        </Navbar>
        <div style={{ height: 'calc(100% - 56px)' }} className="relative">
          <div className='inline-block ml-16 mt-32'>
            <AutoWrite></AutoWrite>
          </div>
          <Computer></Computer>
          <Lines></Lines>
          <img src={wave.src} alt="wave" className='absolute bottom-0' />
        </div>
      </section>
      <section className='bg-[#F3F4F5] w-full h-screen relative'></section>
    </div>
  )
}

export default Home
