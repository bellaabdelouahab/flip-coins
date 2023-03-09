import React, { useEffect, useRef,useState } from 'react'
import './flipp.css'
import { Player } from "@lottiefiles/react-lottie-player";

export default function Flipp () {
  const [isPlaying, setIsPlaying] = useState(false);
  const player = useRef(null);
  useEffect(() => {
    document.querySelector('.lottie-player').addEventListener('click', function(e) {
      if (isPlaying) {
        console.log("is playing");
        return;
      }
      player.current.play();  
      // set data-result
      e.target.setAttribute('data-result',"+"+(Math.floor(Math.random() * 1000))+ " coins");
      e.target.classList.add('active');
      e.target.classList.remove('inactive');
      
      setTimeout(function() {
          e.target.classList.remove('active');
          e.target.classList.add('inactive');
          player.current.stop();
          // lunch click event
          // setTimeout(function() {
          // document.querySelector('.lottie-player ').click()
          // }, 100);
      }, 1300);
    })
  }, [])
  return (
    <div className="Game_area">
      <Player
        ref={player}
        className="lottie-player"
        data-result="500"
        autoplay={false}
        loop={false}
        controls={false}
        src="https://assets9.lottiefiles.com/packages/lf20_1l9gpfir.json"
        style={{ height: "300px", width: "300px" }}
        onEvent={(e) => {
          if (e === "stop") {
            setIsPlaying(false);
          }
          if (e === "play") {
            setIsPlaying(true);
          }
        }}
      ></Player>
    </div>
  );
}











