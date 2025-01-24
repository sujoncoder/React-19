import Item from "./Item";
import PropTypes from "prop-types";


const Items = ({ todoItems }) => {
    return (
        <div className="mt-5 px-5">
            {
                todoItems.map((i, index) => (
                    <Item key={index} item={i} />
                ))
            }
        </div>
    )
}

Items.propTypes = {
    todoItems: PropTypes.array
};

export default Items