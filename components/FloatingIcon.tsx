export default function FloatingIcon() {
    return (
        <div className='fixed right-0 w-2/12 h-full z-[60] upIconContainer'>

            <div className="w-12 h-12 bg-[#352575] fixed rounded-full right-[-5rem] bottom-8 up-icon transition-all duration-300 flex flex-row 
            justify-center items-center cursor-pointer">
                <a href="#home">
                    <i className="fa-solid fa-caret-up scale-[2.0]"></i>
                </a>
            </div>
        </div >
    )
}