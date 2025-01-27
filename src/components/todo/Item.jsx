import PropTypes from "prop-types"




const Item = ({ item, onEditItem, onDeleteTodo }) => {
    return (
        <li className="flex justify-between items-center list-none py-1 text-lg">
            {item.title}

            <div className="flex items-center space-x-2">
                <PenLine
                    onClick={() => onEditItem(item.id)}
                    className="text-yellow-600 cursor-pointer"
                />

                <Save
                    className="text-green-500 cursor-pointer"
                />

                <Trash2
                    onClick={() => onDeleteTodo(item.id)}
                    className="text-red-500 cursor-pointer"
                />
            </div>

        </li>
    )
}

Item.propTypes = {
    item: PropTypes.any,
    onDeleteTodo: PropTypes.func,
    onEditItem: PropTypes.func
}


export default Item