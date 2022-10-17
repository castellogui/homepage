import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import logo from '../assets/logo.png'
import wave from '../assets/svg/wave.svg'

const Home: NextPage = () => {
  return (
    <div>
      <section className='bg-[#352575] w-full h-screen'>
        <Navbar logo={logo}>
          <span>Home</span>
          <span>Sobre</span>
          <span>Serviços</span>
          <span>Portifólio</span>
          <span>Contato</span>
        </Navbar>
        <div style={{ height: 'calc(100% - 56px)' }}></div>
      </section>
    </div>
  )
}

export default Home
