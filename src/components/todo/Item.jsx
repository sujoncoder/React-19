import PropTypes from "prop-types"
import { Trash2 } from 'lucide-react';

const Item = ({ item }) => {
    return (
        <ul className="pr-10">
            <li className="flex justify-between items-center list-none py-1 text-lg">
                {item}

                <button className="text-red-500 "><Trash2 /></button>

            </li>
        </ul>
    )
}

Item.propTypes = {
    item: PropTypes.string
}

export default Item