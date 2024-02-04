import { useEffect, useState } from "react";
import { audioClips } from "./audioclips";

function App() {

  
  const [text, setText] = useState(null)

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playAudio(event.key.toUpperCase())
    })
  }, [])

  function playAudio(audio) {
    document.getElementById(audio).play()
    setText(`${audio}`)
  }

  const displayText = text === "Q" ? "Heater 1"
                    : text === "W" ? "Heater 2"
                    : text === "E" ? "Heater 3"
                    : text === "A" ? "Heater 4"
                    : text === "S" ? "Clap"
                    : text === "D" ? "Open-HH"
                    : text === "Z" ? "Kick-n'Hat"
                    : text === "X" ? "Kick"
                    : text === "C" ? "Closed-HH"
                    : "Playlist 1"
                    

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
        <p className="text">Audio: {displayText}</p>
      </div>
    </div>
  );
}

export default App;
