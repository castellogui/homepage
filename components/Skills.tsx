import wave from '../assets/svg/waveSecondSection.svg'
import background from '../assets/images/thirdSectionBackground.png'
import Terminal from './Terminal'

export default function Skills() {
    return (
        <>
            <img src={wave.src} alt="wave" />
            <img src={background.src} alt="background" className='absolute z-0 w-full h-[90%]' />
            <div className={`w-full h-full relative z-10`}>
                <div className="flex flex-row w-full h-max justify-center mb-5">
                    <span className="font-[HermitBold] text-4xl text-white px-5 py-2 md:pt-12 md:pb-6 md:px-10">SKILLS_</span>
                </div>
                <Terminal></Terminal>
            </div>
        </>
    )
}