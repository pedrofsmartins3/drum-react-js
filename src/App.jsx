import { useEffect, useState } from "react";
import { audioClips } from "./audioclips";

function App() {
  
  const [key, setKey] = useState([])

  const text = audioClips.filter(clip => clip.keyTrigger === key).map(clip => clip.description) 
  const displayText = text.length === 0 ?  "Playlist 1" : text

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playAudio(event.key.toUpperCase())
    })
  }, [])

  function playAudio(audio) {
    document.getElementById(audio).play()
    setKey(`${audio}`)
  }                    

  const buttons = audioClips.map(clip => {
    return (
      <button
        id={clip.description}
        className="drum-pad"
        onClick={() => {playAudio(clip.keyTrigger)}}
        key={clip.keyTrigger}
      >{clip.keyTrigger}
      <audio
        className="clip"
        id={clip.keyTrigger}
        src={clip.url}
      >
      </audio>
      </button>
    )
  })

  return (
    <div id="drum-machine">
      <div id="display">
        <div id="buttons">{buttons}</div>
        <p className="text">{displayText}</p>
      </div>
    </div>
  );
}

export default App;
