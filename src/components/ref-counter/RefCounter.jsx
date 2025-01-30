import { useRef } from "react";
import { useState } from "react";

const RefCounter = () => {

    // const [counter, setCounter] = useState(0);
    // console.log(countRef !== 0 ? `Rendering from top with initial counter state is : ${countRef}` : "Rendering from top with initial counter state is : 0")

    const countRef = useRef(0);
    console.log("countRef", countRef.current)

    const increment = () => {
        countRef.current = countRef.current + 1
        // setCounter(countRef => countRef + 1);
        // console.log("Rendering with current counter state from the function - ", countRef)
    };

    console.log("Rendering from footer...with counter state is :", countRef)


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="space-x-2 w-[200px] p-4 bg-white rounded-lg shadow-lg">

                <h1
                    ref={countRef}
                    className="text-3xl text-center font-semibold">Score : {countRef}</h1> <br />


                <div className="flex justify-center space-x-4 items-center">
                    <button onClick={() => {
                        increment();
                    }} className="bg-blue-500 active:bg-blue-600 px-4 py-1.5 text-white rounded">+1</button>

                    <button onClick={() => {
                        increment();
                        increment();
                        increment();
                    }} className="bg-blue-500 active:bg-blue-600 px-4 py-1.5 text-white rounded">+3</button>
                </div>
            </div>
        </div >
    )
}

export default RefCounter;