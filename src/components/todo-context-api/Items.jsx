import PropTypes from "prop-types";
import { Trash2, PenLine, Save, X } from "lucide-react";

const Items = ({ todoItems, editId, editText, setEditText, onEditItem, onSaveEditItem, onCancelEditItem, onDeleteTodo }) => {

    const handleEditTextChange = (e) => {
        setEditText(e.target.value);
    };

    return (
        <div className="mt-5">
            <ul className="space-y-3">
                {todoItems.map((item) => (
                    <li
                        key={item.id}
                        className="bg-slate-100 border flex justify-between items-center py-1 px-3 rounded shadow-sm hover:shadow-md transition-shadow text-lg text-slate-700"
                    >
                        {editId === item.id ? (
                            <div className="flex w-full justify-between items-center space-x-4">
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={handleEditTextChange}
                                    className="border w-full border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring focus:ring-blue-300"
                                    placeholder="Edit your task"
                                />

                                <div className="flex items-center space-x-2">
                                    <span className="p-2 rounded-full hover:bg-green-100 transition">
                                        <Save
                                            onClick={onSaveEditItem}
                                            className="text-green-500 cursor-pointer transition-colors"
                                        />
                                    </span>
                                    <span className="p-2 rounded-full hover:bg-red-100 transition">
                                        <X
                                            onClick={onCancelEditItem}
                                            className="text-red-500 cursor-pointer transition-colors"
                                        />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="flex w-full justify-between items-center">
                                <span className="font-medium">{item.title}</span>

                                <div className="flex items-center space-x-2">
                                    <span className="p-2 rounded-full hover:bg-yellow-100 transition">
                                        <PenLine
                                            onClick={() => onEditItem(item.id)}
                                            className="text-yellow-500 cursor-pointer transition-colors"
                                        />
                                    </span>
                                    <span className="p-2 rounded-full hover:bg-red-100 transition">
                                        <Trash2
                                            onClick={() => onDeleteTodo(item.id)}
                                            className="text-red-500 cursor-pointer transition-colors"
                                        />
                                    </span>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

Items.propTypes = {
    todoItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    editId: PropTypes.number,
    editText: PropTypes.string.isRequired,
    setEditText: PropTypes.func.isRequired,
    onCancelEditItem: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onEditItem: PropTypes.func.isRequired,
    onSaveEditItem: PropTypes.func.isRequired,
};

export default Items;