import { useState } from "react";

console.log("Rendering from the TOP 👨‍💻.")


const Counter = () => {

    const [counter, setCounter] = useState(0);
    console.log(counter !== 0 ? `Rendering from top in the component : ${counter}` : "Rendering from top in the component : 0")


    const increment = () => {

        // if you need the current valuse must be use prevState
        setCounter((prevCounter) => {
            const newCounter = prevCounter + 1
            console.log("clicking time : ", newCounter)
            return newCounter
        });
        console.log("Rendering from the function - ", counter)
    };

    console.log("Rendering from Footer in the component :", counter)


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="space-x-2 w-[200px] p-4 bg-white rounded-lg shadow-lg">

                <h1 className="text-3xl text-center font-semibold">Score : {counter}</h1> <br />


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

export default Counter;

console.log("Rendering from Footer 👨‍💻")