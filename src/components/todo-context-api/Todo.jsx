import { useState } from 'react';
import Container from '../Container'
import Items from './Items'
import SearchBar from './SearchBar'


// ID GENERATOR
let nextId = 4;

const Todo = () => {
    const [text, setText] = useState("");
    const [todoItems, setTodoItems] = useState([
        {
            id: 1,
            title: "Web Developer"
        },
        {
            id: 2,
            title: "React Developer"
        },
        {
            id: 3,
            title: "MERN Developer"
        }
    ]);

    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");


    // HANDLE ONCHANGE EVENT
    const handleOnChange = (e) => {
        setText(e.target.value)
    };

    // HANDLE ADD ITEN
    const handleAddItem = () => {
        if (text.trim()) {
            setTodoItems([
                ...todoItems,
                {
                    id: nextId,
                    title: text
                }
            ])
            nextId++
            setText("")
        } else {
            alert("Write a valid todo not empty...")
        }
    };

    // HANDLE EDITE ITEM
    const handleEditItem = (itemId) => {
        const editItem = todoItems.find((i) => i.id === itemId);
        if (editItem) {
            setEditId(itemId)
            setEditText(editItem.title)
        };
    };

    // SAVE EDIT ITEM
    const handleSaveEditItem = () => {
        if (editText.trim()) {
            setTodoItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === editId ? { ...item, title: editText } : item
                )
            );
            setEditId(null);
            setEditText("");
        } else {
            alert("Write a valid todo not empty...");
        }
    };

    // HANDLE CANCEL EDIT ITEM
    const handleCancelEdit = () => {
        setEditId(null);
        setEditText("");
    };

    // HANDLE DELETE TODO ITEM
    const handleDeleteItem = (itemId) => {
        const remaining = todoItems.filter((item) => item.id !== itemId);
        setTodoItems(remaining);
    };


    return (
        <section>
            <Container>
                <h1 className='text-2xl font-semibold text-center'>Keep your item on your todos
                </h1>

                <SearchBar
                    text={text}
                    onHandleOnChange={handleOnChange}
                    onAddToDo={handleAddItem}
                />


                <Items
                    todoItems={todoItems}
                    editId={editId}
                    editText={editText}
                    setEditText={setEditText}
                    onEditItem={handleEditItem}
                    onSaveEditItem={handleSaveEditItem}
                    onCancelEditItem={handleCancelEdit}
                    onDeleteTodo={handleDeleteItem}
                />
            </Container>
        </section>
    )
}

export default Todo