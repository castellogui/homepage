import { StaticImageData } from "next/image"
import { Children, useState } from "react"


interface NavbarProps {
    logo: StaticImageData,
    children: any
}

function normalizeElement(elementString: any) {
    return String(elementString).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}



export default function Navbar(props: NavbarProps) {
    const [activeButton, setActiveButton] = useState('')

    function handleActiveButton(buttonName: string) {
        setActiveButton(buttonName)
    }

    function renderElements(elements: any) {
        let elementsArray = Children.toArray(elements)
        return elementsArray.map((element: any, index) => {
            const elementName = normalizeElement(element.props.children)
            return <li key={index} id={elementName}
                onClick={() => handleActiveButton(elementName)}
                className={`${activeButton == elementName ? 'selected' : ''} inline-block mx-5 text-sm font-[Hermit] hover:bg-[#44f5e65b] px-4 py-1 rounded-lg`}>
                <a href={`#${elementName}`}>{element}</a>
            </li>
        })
    }

    return (
        <div className="w-full h-14 relative flex flex-row justify-center items-center">
            <img title="logo" alt="logo" src={props.logo.src} className="h-full absolute left-8"></img>
            <ul>
                {renderElements(props.children)}
            </ul>
        </div>
    )
};