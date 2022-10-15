import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import logo from '../assets/logo.png'

const Home: NextPage = () => {
  return (
    <div>
      <section className='bg-[#352575] w-full h-screen'>
        <Navbar logo={logo}></Navbar>
      </section>
    </div>
  )
}

export default Home
