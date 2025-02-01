import { useRef } from "react";

const RefBtn = () => {
    console.log("rendering.....")

    const ref = useRef(0);

    const handleBtn = () => {
        ref.current = ref.current + 1
        alert(ref.current)
    };



    return (
        <div className="flex justify-center items-center h-screen">
            <button
                onClick={handleBtn}
                className="bg-blue-500 px-4 py-2 rounded text-white font-semibold">
                Click me
            </button>
        </div>
    )
}

export default RefBtn