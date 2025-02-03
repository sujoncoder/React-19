import { useEffect } from 'react'
import Container from '../Container'
import { createConnection } from "./Chat"

const ChatApp = () => {

    // EFFECT
    useEffect(() => {
        const connection = createConnection();
        connection.connect();

        return () => connection.disconnect();

    }, []);

    return (
        <Container>
            <h1 className='text-2xl font-bold'>Welcome to the chat!</h1>
        </Container>
    )
}

export default ChatApp