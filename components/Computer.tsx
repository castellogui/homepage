import computer from '../assets/svg/responsive/computer.svg'
import computerFloor from '../assets/svg/responsive/computer-floor.svg'


export default function Computer() {
    return (
        <>
            <img id='computer' src={computer.src} alt="computer" className='absolute z-40 bottom-0' />
            <img id='floor' src={computerFloor.src} alt="computerFloor" className='absolute z-30 bottom-0 opacity-40' />
        </>
    )
}