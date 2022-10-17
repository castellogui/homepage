import Computer from "./Computer";
import Lines from "./Lines";

export default function Sprites() {
    return (
        <div className="w-9/12 h-5/6 absolute bottom-0 right-0 z-0">
            <Computer></Computer>
            <Lines></Lines>
        </div>
    )
}