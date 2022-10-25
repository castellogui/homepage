import AutoWrite from "./AutoWrite";
import terminal from '../assets/svg/responsive/terminal.svg'
import { useEffect, useState } from "react";
import reactIcon from '../assets/icons/react-icon-p.png'
import nodeIcon from '../assets/icons/nodejs-icon-p.png'
import tailwindIcon from '../assets/icons/tailwindcss-icon-p.png'
import postgresIcon from '../assets/icons/postgres-icon-p.png'
import javaIcon from '../assets/icons/java-icon-p.png'
import mongoDbIcon from '../assets/icons/mongodb-icon-p.png'
import nextjsIcon from '../assets/icons/nextjs-icon-p.png'
import oracleIcon from '../assets/icons/oracle-icon-p.png'


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
                    <AutoWrite loop={false} showCursor={false} typeSpeed={15} text={["> Nos meus últimos projetos, pude trabalhar com algumas das tecnologias abaixo, e hoje as aplico no meu dia a dia!"]} style={{ fontSize: '100%' }}></AutoWrite>
                    <br></br>
                </>
            )
        } else {
            return null
        }
    }

    return (
        <div id="terminal-float-container" className='relative w-[90%] m-auto md:w-[50%] z-10 '>
            <div id="terminal-container" className='transition-all w-0 h-auto duration-300 delay-700 '>
                <div className="w-full h-full bg-[#282a36] rounded-xl">
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
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
                        <div className="flex justify-center text-6xl p-6">
                            <img src={reactIcon.src} className="w-full h-full" />  
                        </div>
                        <div className="flex justify-center text-6xl p-6">
                            <img src={nextjsIcon.src} className="w-full h-full" />
                        </div>
                        <div className="flex justify-center text-6xl p-6">
                            <img src={tailwindIcon.src} className="w-full h-full" />
                        </div>
                        <div className="flex justify-center text-6xl p-6">
                            <img src={nodeIcon.src} className="w-full h-full" />
                        </div>
                        <div className="flex justify-center text-6xl p-6">
                            <img src={javaIcon.src} className="w-full h-full" />
                        </div>
                        <div className="flex justify-center text-6xl p-6">
                            <img src={postgresIcon.src} className="w-full h-full" />
                        </div>
                        <div className="flex justify-center text-6xl p-6">
                            <img src={oracleIcon.src} className="w-full h-full" />
                        </div>
                        <div className="flex justify-center text-6xl p-6">
                            <img src={mongoDbIcon.src} className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}