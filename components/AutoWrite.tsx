import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function AutoWrite() {
    const el: any = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Guilherme Castello'],
            startDelay: 300,
            typeSpeed: 40,
            cursorChar: '_',
        });
    }, []);


    return (<span ref={el} className="font-[HermitBold] text-5xl"></span>)
}