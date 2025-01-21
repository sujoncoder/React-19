import PropTypes from "prop-types";

const Button = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="bg-blue-400 active:bg-blue-500 rounded-lg shadow px-4 py-1.5 text-white">
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node
};

export default Button