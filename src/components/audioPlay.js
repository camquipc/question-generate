import React , { useRef, useState , useEffect } from 'react'
import '../Audio.css';
import play  from '../assets/img/play.png';
import stop  from '../assets/img/stop.png';

import c from '../assets/audio/audio.mp3';

const AudioPlay = (props) => {

  const audioRef = useRef(new Audio(props.audio));
  const [toggleAudio , setToggleAudio] = useState(false);
  

  

  const onPlay = () => {
   
    audioRef.current.play();
    setToggleAudio(true);
  }

  const onStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setToggleAudio(false);
  }

  

  return (
    <div className="audio-container">
      <div className="audio-control">
        {
          toggleAudio ? <button type="button" onClick={(event) => onStop(event)}><img src={stop} alt="stop"/></button>
          : <button type="button" onClick={(event) => onPlay(event)}><img src={play} alt="play"/></button>
        }
      </div>
      <div className="progress-bar-content">
        <div  className="progress-bar"></div>
      </div>
      <audio ref={audioRef} src={props.audio} />
      
    </div>
  )
}

export default AudioPlay