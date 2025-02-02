import { useEffect } from "react";
import { useRef } from "react"

const VideoPlayer = ({ isPlaying, src }) => {
    console.log("component top")
    const vRef = useRef(null);

    useEffect(() => {
        console.log("hello effect.👋")

        if (isPlaying) {
            console.log('Calling video.play()');
            vRef.current.play()
        } else {
            console.log('Calling video.pause()');
            vRef.current.pause()
        }
    }, [isPlaying]);

    console.log("component footer")


    return (
        <div>
            {console.log("JSX")}
            <video ref={vRef} src={src} loop playsInline />
        </div>
    )
}

export default VideoPlayer