import lineBright from '../assets/svg/lines-bright.svg'
import linesClean from '../assets/svg/lines-clean.svg'

export default function Lines() {
    return (
        <div className='opacity-40'>
            <img src={lineBright.src} alt="lineBright" className='absolute right-0 bottom-0' />
            <img src={linesClean.src} alt="lineClean" className='absolute right-8 bottom-0' />
        </div>
    )
}