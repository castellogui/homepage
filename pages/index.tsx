import Head from 'next/head'
import type { NextPage } from 'next'
import logo from '../assets/logomarca-branco.png'
import logoMobile from '../assets/logo.png'
import Script from 'next/script'
import FloatingIcon from '../components/FloatingIcon'
import Navbar from '../components/Navbar'
import MobileNavbar from '../components/MobileNavbar'
import HomeElement from '../components/Home'
import Sobre from '../components/Sobre'
import Skills from '../components/Skills'
import Contato from '../components/Contato'
import Section from '../components/Section'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Guilherme Castello Dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Script src='https://kit.fontawesome.com/796432032e.js'></Script>
      <FloatingIcon></FloatingIcon>
      <Section id='home' color='#352575' heightRender='screen'>
        <Navbar logo={logo}>
          <span>Home</span>
          <span>Sobre</span>
          <span>Skills</span>
          <span>Contato</span>
        </Navbar>
        <MobileNavbar logo={logoMobile}>
        </MobileNavbar>
        <HomeElement></HomeElement>
      </Section>
      <Section id='sobre' color='#F3F4F5' heightRender='max'>
        <Sobre></Sobre>
      </Section>
      <Section id='skills' color='#352575' heightRender='max'>
        <Skills></Skills>
      </Section>
      <Section id='contato' color='#352575' heightRender='max'>
        <Contato></Contato>
      </Section>
    </>
  )
}

export default Home
