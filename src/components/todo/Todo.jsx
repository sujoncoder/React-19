import { useState } from 'react';
import Container from '../Container'
import Items from './Items'
import SearchBar from './SearchBar'


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

    // ID GENERATE
    let nextId = 4;

    // HANDLE ONCHANGE EVENT
    const handleOnChange = (e) => {
        setText(e.target.value)
    };


    // HANDLE ONCLICK EVENT
    const handleAddToDo = () => {
        if (text.trim()) {
            setTodoItems([
                ...todoItems,
                {
                    id: nextId++,
                    title: text
                }
            ])
            setText("")
        } else {
            alert("Write a valid todo not empty...")
        }
    };

    // HANDLE DELETE TOTO ITEM
    const handleDeleteTodo = (itemId) => {
        const remaining = todoItems.filter((item) => item.id !== itemId);
        setTodoItems(remaining);
    };


    return (
        <section>
            <Container>
                <h1 className='text-2xl font-semibold text-center'>Keep your item on your todos</h1>

                <SearchBar text={text} onHandleOnChange={handleOnChange} onHandleAddToDo={handleAddToDo} />

                <Items todoItems={todoItems} onDeleteTodo={handleDeleteTodo} />
            </Container>
        </section>
    )
}

export default Todo