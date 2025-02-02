import { useState } from 'react';
import VideoPlayer from './VideoPlayer'
import Container from '../Container'


const EffectApp = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [text, setText] = useState("");

    return (
        <Container>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='learning useEffect'
                type="text"
                className='border px-2 h-10 rounded w-full mb-5'
            />

            <VideoPlayer
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            /> <br />


            <button
                onClick={() => setIsPlaying(!isPlaying)}
                className='bg-blue-500 active:bg-blue-600 px-4 py-1 rounded-full font-semibold text-white'>
                {isPlaying ? "Pause" : "Play"}
            </button>
        </Container>
    )
}

export default EffectApp