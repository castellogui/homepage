import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import logo from '../assets/logomarca-branco.png'
import logoMobile from '../assets/logo.png'
import MobileNavbar from '../components/MobileNavbar'
import FirstSectionBody from '../components/FirstSectionBody'
import Script from 'next/script'


const Home: NextPage = () => {
  return (
    <div>
      <Script src='https://kit.fontawesome.com/796432032e.js'></Script>
      <section id="home" className='bg-[#352575] w-full h-screen relative overflow-hidden'>
        <Navbar logo={logo}>
          <span>Home</span>
          <span>Sobre</span>
          <span>Portfólio</span>
          <span>Contato</span>
        </Navbar>
        <MobileNavbar logo={logoMobile}>
          
        </MobileNavbar>
        <FirstSectionBody></FirstSectionBody>
      </section>
      <section className='bg-[#F3F4F5] w-full h-screen relative'></section>
    </div>
  )
}

export default Home
