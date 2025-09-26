import dummyImage from "../../assets/dummmy-video-player.svg"
import playbutton from "../../assets/play-button.svg"
import "./videoplayer.scss"
export default function VideoPlayer() {
  return (
    <div className="videoplayer-container">
      <img src={playbutton} alt="play-button" className="videoplayer-button" />
      <img src={dummyImage} alt="video-player-space-holder"/>
    </div>
  );
}