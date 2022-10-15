import { StaticImageData } from "next/image"

interface NavbarProps{
    logo: StaticImageData
}

export default function Navbar(props: NavbarProps) {
    return (
        <div className="w-full h-14 bg-white">
            <img src={props.logo.src} className="h-full"></img>
        </div>
    )
}