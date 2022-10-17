import { StaticImageData } from "next/image"
import { Children } from "react"


interface NavbarProps {
    logo: StaticImageData,
    logoTitle?: string,
    children: any
}

function normalizeElement(elementString: any) {
    return String(elementString).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

export default function Navbar(props: NavbarProps) {
    function renderElements(elements: any) {
        let elementsArray = Children.toArray(elements)
        return elementsArray.map((element: any, index) => {
            const elementName = normalizeElement(element.props.children)
            return <li key={index} id={elementName}
                className="h-full px-5 text-sm list-none font-[Hermit] cursor-pointer hover:border-t-2 border-t-white transition-all duration-100">
                <a className="h-full flex flex-row items-center" href={`#${elementName}`}>{element}</a>
            </li>
        })
    }

    return (
        <div id="navbar" className="w-full h-14 flex items-center px-6 shadow-lg relative z-50">
            <div className="flex items-center">
                <div className="w-10 h-10">
                    <img title="logo" alt="logo" src={props.logo.src} className="h-full w-full left-8"></img>
                </div>
                <h2 className="text-sm ml-2 text-white font-[Hermit]">{props.logoTitle}</h2>
            </div>
            <div className="h-full flex flex-[2] items-center justify-center">
                {renderElements(props.children)}
            </div>
            
        </div>
    )
};