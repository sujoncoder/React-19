import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        console.log(counter);
        setCounter((counter) => counter + 1);
        console.log(counter);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="space-x-2 w-[200px] p-4 bg-white rounded-lg shadow-lg">

                <h1 className="text-3xl text-center font-semibold">Score : {counter}</h1> <br />


                <div className="flex justify-center space-x-4 items-center">
                    <button onClick={() => {
                        increment(console.log("Clicked +1", counter));
                    }} className="bg-blue-500 active:bg-blue-600 px-4 py-1.5 text-white rounded">+1</button>

                    <button onClick={() => {
                        increment(console.log("Clicked +2.1", counter));
                        increment(console.log("Clicked +2.2", counter));
                        increment(console.log("Clicked +2.3", counter));
                    }} className="bg-blue-500 active:bg-blue-600 px-4 py-1.5 text-white rounded">+3</button>
                </div>
            </div>
        </div >
    )
}

export default Counter;