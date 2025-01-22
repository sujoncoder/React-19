import { useState } from "react";

const Color = () => {

    const [color, setColor] = useState("bg-pink-500");

    const handleColor = () => {
        setColor("bg-red-500");
        setTimeout(() => setColor("bg-cyan-500"), 1000);
        setTimeout(() => setColor("bg-green-500"), 2000);
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className={`space-x-2 w-[200px] p-4 ${color} rounded-lg shadow-lg`}>

                <h1 className="text-3xl text-center font-semibold">Color Render</h1> <br />


                <div className="flex justify-center space-x-4 items-center">
                    <button onClick={() => {
                        handleColor(console.log("red"))
                        handleColor(console.log("cyan"))
                        handleColor(console.log("green"))

                    }} className="bg-blue-500 active:bg-blue-600 px-4 py-1.5 text-white rounded">Change Color</button>
                </div>
            </div>
        </div >
    )
}

export default Color;