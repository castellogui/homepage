import wave from '../assets/svg/waveSecondSection.svg'
import Carousel from './Carousel'


export default function ThirdSectionBody() {
    return (
        <>
            <img src={wave.src} alt="wave" className='absolute top-0 z-20' />
            <div className={`w-full h-full pt-32`}>
                <div className="flex flex-row w-full h-max justify-center">
                    <span className="font-[HermitBold] text-4xl text-white px-5 py-2 md:pt-12 md:pb-6 md:px-10">PORTFÓLIO_</span>
                </div>
                <div className='w-full h-max flex flex-row flex-wrap justify-center'>
                    <Carousel></Carousel>
                    {/* <div className='w-[60%] md:w-52 h-[25rem] mx-6 bg-white rounded-3xl mb-6'></div>
                    <div className='w-[60%] md:w-52 h-[25rem] mx-6 bg-white rounded-3xl mb-6'></div>
                    <div className='w-[60%] md:w-52 h-[25rem] mx-6 bg-white rounded-3xl mb-6'></div> */}
                </div>
            </div>
        </>
    )
}