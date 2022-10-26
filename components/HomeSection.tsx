import Sprites from "./Sprites";
import wave from '../assets/svg/wave.svg'
import AutoWrite from "./AutoWrite";


export default function HomeSection() {
    return (
        <div style={{ height: 'calc(100% - 56px)' }} className="relative">
            <div className="text-center pt-48 md:text-left md:p-0 md:absolute md:top-[30%] md:left-14 z-10 md:w-[55%]">
                <AutoWrite text={['Guilherme Castello']} typeSpeed={40} loop={false} className="border-b-2 border-[#42e8e0]"></AutoWrite>
                <br></br>
                <br></br>
                <span className="text-3xl md:text-5xl font-[HermitBold]">Sou </span><AutoWrite text={['desenvolvedor!', 'apaixonado por tecnologia!', 'gamer!']} typeSpeed={40} className="text-[#42e8e0]"></AutoWrite>
            </div>
            <div className="absolute top-[calc(100%_-_5rem)] md:top-[calc(100%_-_7rem)] w-full md:text-center z-30">
                <div className="md:pl-48 animate-bounce">
                    <a href="#sobre" className="cursor-pointer"><span className="md:!hidden fa-solid fa-circle-arrow-down mx-4 px-4 py-2 bg-white rounded-lg" style={{ color: '#352575' }}></span></a>
                    <a href="#sobre" className="cursor-pointer"><span className="font-[Hermit] mx-3 px-4 py-2 bg-white rounded-lg text-[#352575] hidden md:inline-block">Sobre mim <span className="fa-solid fa-circle-arrow-down" style={{ color: '#352575' }}></span></span></a>
                </div>
            </div>
            <Sprites></Sprites>
            <img src={wave.src} alt="wave" className='absolute bottom-0 z-20' />
        </div>
    )
}