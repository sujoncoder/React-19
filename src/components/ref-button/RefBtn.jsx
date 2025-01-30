import { useRef } from "react";
import Container from "../Container"

const RefBtn = () => {
    console.log("rendering.....")

    const ref = useRef(0);

    const handleBtn = () => {
        alert(ref.current = ref.current + 1)
    };


    return (
        <div>
            <Container>
                <h1>{ref.current}</h1>
                <button
                    onClick={handleBtn}
                    className="bg-blue-500 px-4 py-2 rounded text-white font-semibold">Hello</button>
            </Container>
        </div>
    )
}

export default RefBtn