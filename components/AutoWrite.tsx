
import Typed from 'react-typed';

interface AutoWriteProps {
    text: Array<string>,
    loop: boolean,
    showCursor: boolean,
    className?: string,
    typeSpeed:number
}

export default function AutoWrite(props: AutoWriteProps) {
    return (
        <Typed
            strings={props.text}
            typeSpeed={props.typeSpeed}
            loop={props.loop}
            className={`text-3xl md:text-5xl font-[HermitBold] ${props.className}`}
            showCursor={props.showCursor}
        />
    )
}