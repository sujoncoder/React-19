import { useRef } from "react";
import Container from "../Container"

const RefBtn = () => {
    console.log("rendering.....")

    const ref = useRef(0);

    const handleBtn = () => {

    };
    ref.current.scrollIntoView();


    return (
        <div>
            <Container>
                <div ref={ref}>
                    hello world
                </div>
                <button
                    onClick={handleBtn}
                    className="bg-blue-500 px-4 py-2 rounded text-white font-semibold">Hello</button>
            </Container>
        </div>
    )
}

export default RefBtn