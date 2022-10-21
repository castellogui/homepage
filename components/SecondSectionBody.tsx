import wave from '../assets/svg/waveSecondSection2.svg'

export default function SecondSectionBody() {
    return (
        <div className="w-full h-full">
            <div className="flex flex-row w-full h-max ">
                <span className="font-[HermitBold] text-4xl text-[#352575] px-5 py-5 md:py-16 md:px-10">Um pouco de mim_</span>
            </div>
            <div className="flex flex-row w-full h-max">
                <div className="flex flex-row items-center">
                    <i className="fa-solid fa-book text-3xl p-5 mx-8 bg-[#352575] rounded-full"></i>
                </div>
                <span className="text-[#352575] font-[Hermit] md:leading-8 text-justify mr-10  text-sm md:text-base">Iniciei minha jornada na tecnologia bem cedo. Sempre fui muito fã de games, e com o passar do tempo
                tentei entender como funcionam, e assim dei o ponta pé para o mundo da programação.</span>
            </div>
            <div className="flex flex-row w-full h-max mt-8">
                <span className="text-[#352575] font-[Hermit] md:leading-6 text-justify ml-10  text-sm md:text-base">Minha primeira oportunidade no mercado de programação foi em 2021, numa pequena empresa do interior de SP chamada Support Informatica,
                    onde pude aprender minhas bases de back-end e front-end. Trabalhando na manutenção de um ERP, utilizei Java com SpringBoot, Hibernate e VueJS.</span>
                <div className="flex flex-row items-center">
                    <i className="fa-solid fa-1 text-3xl py-5 px-7 mx-8 bg-[#352575] rounded-full"></i>
                </div>
            </div>
            <div className="flex flex-row w-full h-max mt-8">
                <div className="flex flex-row items-center">
                    <i className="fa-solid fa-book text-3xl p-5 mx-8 bg-[#352575] rounded-full"></i>
                </div>
                <span className="text-[#352575] font-[Hermit] md:leading-6 text-justify mr-10 text-sm md:text-base">Atualmente trabalho como desenvolvedor fullstack em um time global. Na U-Shin, desenvolvo aplicações para automação de processos, facilitação de rotinas e input de dados. Em sua maioria, os projetos são realizados em
                ReactJS e Typescript, utilizando NodeJS como linguagem server-side.</span>
            </div>
            <img src={wave.src} alt="wave" className='absolute bottom-0 z-20' />

        </div>
    )
}