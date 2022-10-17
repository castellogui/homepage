import computer from '../assets/svg/computer.svg'
import computerFloor from '../assets/svg/computer-floor.svg'


export default function Computer() {
    return (
        <div className=''>
            <img src={computer.src} alt="computer" className='absolute z-10 right-8 bottom-20' />
            <img src={computerFloor.src} alt="computerFloor" className='absolute z-0 right-8 bottom-20 opacity-50' />
        </div>
    )
}