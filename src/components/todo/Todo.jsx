import { useState } from 'react';
import Container from '../Container'
import Items from './Items'
import SearchBar from './SearchBar'


const Todo = () => {
    const [text, setText] = useState("");

    const [todoItems, setTodoItems] = useState([
        "Developer",
        "Designer"
    ]);

    // ONCHANGE EVENT
    const handleOnChange = (e) => {
        setText(e.target.value)
    };

    // HANDLE CLICK EVENT
    const handleClick = () => {
        text.trim() ? (
            setTodoItems([
                ...todoItems, text
            ]),
            setText("")
        ) : (
            alert('Please enter a valid todo item!')
        )
    };

    return (
        <section>
            <Container>
                <h1 className='text-2xl font-semibold text-center'>Keep your item on your todos</h1>

                <SearchBar onHandleClick={handleClick} onHandleOnChange={handleOnChange} text={text} />

                <Items todoItems={todoItems} />
            </Container>
        </section>
    )
}

export default Todo