import PropTypes from "prop-types"


const SearchBar = ({ text, onHandleOnChange, onAddToDo }) => {
    return (
        <>
            <div className='flex justify-evenly items-center mt-10'>

                <input
                    value={text}
                    onChange={onHandleOnChange}
                    placeholder="Write here you want to keep" className='border-2 w-[300px] rounded px-2 h-10 text-slate-500' type="text"
                />

                <button
                    onClick={onAddToDo}
                    className='px-4 py-2 rounded bg-blue-500 text-white active:bg-blue-600'>
                    Add
                </button>

            </div>

            <h2 className="text-slate-500 pl-10 my-4">Your text : {text} </h2>
        </>
    )
}

SearchBar.propTypes = {
    text: PropTypes.string,
    onHandleOnChange: PropTypes.func,
    onAddToDo: PropTypes.func
};

export default SearchBar;