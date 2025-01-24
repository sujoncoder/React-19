import PropTypes from "prop-types"
import { Trash2 } from 'lucide-react';
import { PenLine } from 'lucide-react';


const Item = ({ item, onDeleteTodo }) => {
    return (
        <li className="flex justify-between items-center list-none py-1 text-lg">
            {item.title}

            <div className="flex items-center space-x-2">
                <PenLine className="text-yellow-600 cursor-pointer"
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
    item: PropTypes.obj,
    onDeleteTodo: PropTypes.func
}


export default Item