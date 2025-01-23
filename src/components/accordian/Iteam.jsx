import { useState } from "react"
import PropTypes from "prop-types"

const Iteam = ({ title, children }) => {
    const [show, setShow] = useState(false);


    return (
        <>
            <div className="border p-4 rounded">
                <h1 className="text-2xl font-semibold">{title}</h1>


                <button
                    onClick={() => setShow(!show)}
                    className="px-4 py-1.5 bg-blue-400 text-white rounded mt-3 active:bg-blue-500">
                    {show ? "Hide" : "Show more"}
                </button>


                {show && <p className="text-slate-600 text-lg pt-3">{children}</p>}
            </div>
        </>
    )
}


Iteam.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};

export default Iteam