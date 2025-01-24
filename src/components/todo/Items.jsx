import PropTypes from "prop-types";
import Item from "./Item";


const Items = ({ todoItems, onDeleteTodo }) => {


    return (
        <div className="mt-5 px-5">
            {
                todoItems.map((ti) => (
                    <ul key={ti.id} className="pr-5">
                        <Item item={ti} onDeleteTodo={onDeleteTodo} />
                    </ul>
                ))
            }
        </div>
    )
}

Items.propTypes = {
    todoItems: PropTypes.array,
    onDeleteTodo: PropTypes.func
}

export default Items