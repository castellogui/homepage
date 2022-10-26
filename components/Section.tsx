interface SectionProps{
    id: string,
    color: string,
    children: any,
    heightRender: "screen" | "max"
}

const heightRender = {
    "screen": "100vh",
    "max": "max-content"
}

export default function Section(props: SectionProps) {
    return (
        <section id={props.id} style={{ background: props.color, height: heightRender[props.heightRender]}} className="w-full relative">
            {props.children}
        </section>
    )
}