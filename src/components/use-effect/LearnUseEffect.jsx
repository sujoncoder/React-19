import { useState } from "react";
import Container from "../Container";
import { useEffect } from "react";


console.log("TOP")

const LearnUseEffect = () => {
    const [counter, setCounter] = useState(0);

    console.log("components top")

    // HANDLE INCREMENT
    const handleIncrement = () => {
        setCounter(prevCount => prevCount + 1)
        console.log("Render from the function")
    };


    // USEEFFECT
    useEffect(() => {
        console.log("from effect.👋")

        // clean up function
        return () => console.log("Cleanup functon.")
    }, [counter]);

    console.log("component footer")

    return (
        <div>
            <Container>
                <h1 className="text-2xl text-slate-500 font-semibold text-center mb-10">Counter with UseEffect</h1>

                <h2 className="text-2xl text-slate-600 font-bold text-center mb-10">Score : { }
                    <span className="text-pink-500">{counter}</span>
                </h2>

                {console.log("JSX")}

                <div className="flex justify-center items-center">
                    <button
                        onClick={handleIncrement}
                        className="bg-blue-500 text-lg font-semibold px-4 py-2 rounded text-white active:bg-blue-600">
                        Increment
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default LearnUseEffect;

console.log("FOOTER")