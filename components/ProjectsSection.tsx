import wave from '../assets/svg/waveSecondSection.svg'
import dashboard from '../assets/projects/dashboard.png'
import javacina from '../assets/projects/javacina.png'
import todolist from '../assets/projects/todolist.png'


export default function ThirdSectionBody() {
    return (
        <>
            <img src={wave.src} alt="wave" className='absolute top-0 z-20' />
            <div className={`w-full h-full pt-32`}>
                <div className="flex flex-row w-full h-max justify-center my-10">
                    <span className="font-[HermitBold] text-4xl text-white px-5 py-2 md:pt-12 md:pb-6 md:px-10">PROJETOS_</span>
                </div>
                <div className='w-full h-max flex flex-row flex-wrap justify-center'>
                    <div className='w-[60%] md:w-[15%] h-[30rem] mx-6 bg-white rounded-3xl mb-6 p-4 text-center'>
                        <img src={dashboard.src} alt="dashboard" className='rounded-3xl max-h-36 mx-auto' />
                        <br></br>
                        <span className='text-[#888491] font-[Hermit]'>Dashboard Management</span>
                    </div>
                    <div className='w-[60%] md:w-[15%] h-[30rem] mx-6 bg-white rounded-3xl mb-6 p-4 text-center'>
                        <img src={javacina.src} alt="javacina" className='rounded-3xl max-h-36 mx-auto' />
                        <br></br>
                        <span className='text-[#888491] font-[Hermit]'>Javacina</span>
                    </div>
                    <div className='w-[60%] md:w-[15%] h-[30rem] mx-6 bg-white rounded-3xl mb-6 p-4 text-center'>
                        <img src={todolist.src} alt="todolist" className='rounded-3xl max-h-36 mx-auto' />
                        <br></br>
                        <span className='text-[#888491] font-[Hermit]'>Todo List</span>
                    </div>
                </div>
            </div>
        </>
    )
}