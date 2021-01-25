import mario from "../../../assets/music/Super Mario.mp3";
import run from "../../../assets/music/Awolnation-Run.mp3";
import subway from "../../../assets/music/OST Subway Surfers.mp3";
import battleToads from "../../../assets/music/Battle Toads.mp3";
import gta from "../../../assets/music/GTA San-Andreas.mp3";

let isPlaying = false;

function playSong(e) {
  e.preventDefault();
  const name = e.target.innerText;
  const cross = document.querySelector(".cross");
  const player = document.querySelector(".music");
  let src;
  if (isPlaying) {
    player.innerHTML = "";
  }
  switch (name) {
    case "Super Mario":
      src = mario;
      break;
    case "Awo-Run":
      src = run;
      break;
    case "Battle Toads":
      src = battleToads;
      break;
    case "GTA San-Andreas":
      src = gta;
      break;
    case "OST Subway Surfers":
      src = subway;
      break;
    default:
      src = mario;
  }
  const playerDiv = document.createElement("div");
  const audioDom = document.createElement("audio");
  const srcDom = document.createElement("source");
  audioDom.controls = true;
  srcDom.src = src;
  srcDom.type = "audio/mpeg";
  playerDiv.appendChild(audioDom);
  audioDom.appendChild(srcDom);
  player.appendChild(audioDom);
  cross.style.display = "unset";
  isPlaying = true;
}

export function closePlayer() {
  const cross = document.querySelector(".cross");
  const player = document.querySelector(".music");
  player.innerHTML = "";
  cross.style.display = "none";
}

export default playSong;
