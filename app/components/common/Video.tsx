import React, { useRef, useEffect } from 'react'
// import video_mp4 from "../lib/game_Trim.mp4"
import { Player } from 'video-react'

export function Translate() {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        videoRef.current?.play();
    }, []);

    const StartReplay = () => {

      if (videoRef.current?.currentTime) {

       videoRef.current.currentTime = 0;
        }

       videoRef.current?.play();

    }

    return (
        <React.StrictMode>
            <Player
                onPlay={()=>{}}
                onEnded={()=>{}}
                onLoadStart={()=>{}}
                onPause={()=>{}}
                videoId='video1'
            >
                <source src="/まとめ.mp4" />
                
            </Player>
        </React.StrictMode>
    );
}
