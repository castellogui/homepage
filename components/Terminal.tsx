import AutoWrite from "./AutoWrite";
import terminal from '../assets/svg/responsive/terminal.svg'
import { useEffect, useState } from "react";
import reactIcon from '../assets/icons/react-icon.png'
import nodeIcon from '../assets/icons/nodejs-icon.png'
import tailwindIcon from '../assets/icons/tailwindcss-icon.png'
import postgresIcon from '../assets/icons/postgres-icon.png'
import javaIcon from '../assets/icons/java-icon.png'
import mongoDbIcon from '../assets/icons/mongodb-icon.png'
import nextjsIcon from '../assets/icons/nextjs-icon.png'
import oracleIcon from '../assets/icons/oracle-icon.png'


export default function Terminal() {
    const [delayed, setDelayed] = useState(false)
    useEffect(() => {
        const id = document.getElementById('terminal-container')
        id!.style.width = '100%'
        setTimeout(() => { setDelayed(true) }, 1000)
    }, [])

    function RenderAutoWrite(delayed: boolean) {
        if (delayed) {
            return (
                <>
                    <AutoWrite loop={false} showCursor={false} typeSpeed={15} text={["> Sou desenvolvedor front-end, e aqui você pode encontrar alguns dos meus trabalhos! Ah, e essas são algumas tecnologias que utilizo:"]} style={{ fontSize: '100%' }}></AutoWrite>
                    <br></br>
                </>
            )
        } else {
            return null
        }
    }

    return (
        <div id="terminal-float-container" className='relative w-[90%] m-auto h-[calc(100vh_/_2)] md:ml-32 md:w-[50%] z-10'>
            <div id="terminal-container" className='absolute transition-all w-0 h-full duration-300 delay-700'>
                <div className="w-full h-full bg-[#282a36] rounded-xl overflow-hidden">
                    <div className="w-full h-6 flex flex-row mt-1">
                        <div className="w-[15%] h-full flex flex-row">
                            <div className="ml-2 mt-2 w-3 h-3 bg-[#ee695f] rounded-full"></div>
                            <div className="ml-2 mt-2 w-3 h-3 bg-[#f7bf4e] rounded-full"></div>
                            <div className="ml-2 mt-2 w-3 h-3 bg-[#62c554] rounded-full"></div>
                        </div>
                        <div className="w-[85%] h-full flex flex-row justify-center">
                            <span>castellogui@dev: /castdev/tpwk</span>
                        </div>
                    </div>
                    <div className="px-4 mt-3 h-[15%]">
                        {RenderAutoWrite(delayed)}
                    </div>
                    <div className="grid grid-cols-4 p-10 gap-3">
                        <img src={reactIcon.src} className="w-32 h-32" />
                        <img src={nextjsIcon.src} className="w-32 h-32" />
                        <img src={tailwindIcon.src} className="w-32 h-32" />
                        <img src={nodeIcon.src} className="w-32 h-32" />
                        <img src={javaIcon.src} className="w-32 h-32" />
                        <img src={postgresIcon.src} className="w-32 h-32" />
                        <img src={oracleIcon.src} className="w-32 h-32" />
                        <img src={mongoDbIcon.src} className="w-32 h-32" />
                    </div>
                </div>
            </div>
        </div>
    )
}