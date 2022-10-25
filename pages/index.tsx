import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import logo from '../assets/logomarca-branco.png'
import logoMobile from '../assets/logo.png'
import MobileNavbar from '../components/MobileNavbar'
import FirstSectionBody from '../components/FirstSectionBody'
import Script from 'next/script'
import SecondSectionBody from '../components/SecondSectionBody'
import FloatingIcon from '../components/FloatingIcon'
import ThirdSectionBody from '../components/ThirdSectionBody'


const Home: NextPage = () => {
  return (
    <>
      <FloatingIcon></FloatingIcon>
      <div>
        <Script src='https://kit.fontawesome.com/796432032e.js'></Script>
        <section id="home" className='bg-[#352575] w-full h-screen relative overflow-hidden'>
          <Navbar logo={logo}>
            <span>Home</span>
            <span>Sobre</span>
            <span>Skills</span>
            <span>Contato</span>
          </Navbar>
          <MobileNavbar logo={logoMobile}>
          </MobileNavbar>
          <FirstSectionBody></FirstSectionBody>
        </section>
        <section id="sobre" className='bg-[#F3F4F5] w-full h-max md:h-max relative'>
          <SecondSectionBody></SecondSectionBody>
        </section>
        <section id="skills" className='bg-[#352575] w-full h-max relative pb-10'>
          <ThirdSectionBody></ThirdSectionBody>
        </section>
      </div>
    </>
  )
}

export default Home
