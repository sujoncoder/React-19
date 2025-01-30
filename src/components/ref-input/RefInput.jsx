import { useRef } from "react";
import Container from "../Container"

const RefInput = () => {
    console.log("rendering...")

    const ref = useRef();

    const handleInputFocus = () => {
        ref.current.focus()
    };


    return (
        <div>
            <Container>
                <input
                    ref={ref}
                    type="text" className="border px-2 w-[300px] h-10 rounded" />

                <button
                    onClick={handleInputFocus}
                    className="border px-4 py-2 rounded ml-2 bg-blue-500 active:bg-blue-600 text-white font-semibold">Focus</button>
            </Container>
        </div>
    )
}

export default RefInput