import { useState, useEffect } from 'react';
import { createConnection } from './Chat';
import Countainer from "../Container"

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]);
    return <h1 className='text-2xl font-semibold my-5 text-center'>Welcome to the {roomId} room!</h1>;
}

export const ChatApp = () => {
    const [roomId, setRoomId] = useState('general');
    const [show, setShow] = useState(false);
    return (
        <Countainer>
            <label className='text-xl'>
                Choose the chat room:{' '}
                <select
                    className='border-2 p-1 mx-2'
                    value={roomId}
                    onChange={e => setRoomId(e.target.value)}
                >
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <div className='flex justify-center items-center my-5'>
                <button
                    onClick={() => setShow(!show)}
                    className='text-white font-semibold px-4 py-1 rounded bg-blue-500'>
                    {show ? 'Close chat' : 'Open chat'}
                </button>
            </div>
            {show && <hr />}
            {show && <ChatRoom roomId={roomId} />}
        </Countainer>
    );
}
