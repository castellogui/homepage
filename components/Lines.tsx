import lineBright from '../assets/svg/responsive/lines-bright.svg'
import linesClean from '../assets/svg/responsive/lines-clean.svg'

export default function Lines() {
    return (
        <>
            <img src={lineBright.src} alt="lineBright" className='absolute z-20 bottom-0 opacity-40' />
            <img src={linesClean.src} alt="lineClean" className='absolute z-10 bottom-0 opacity-40'/>
        </>
    )
}