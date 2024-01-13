import MusicPlayer from "./MusicPlayer";
import './styles/music-section.css';

export default function MusicSection() {
  return (
    <div className="music-section-container">
        <div className="music-section">

            <div className="music-header">
                <h1>Check Out Our Sound! 🎸</h1>

                <div className="music-subheader">
                    <h2>Need more songs?</h2>
                    <h2>check us out on social media! 🙇‍♂️</h2>
                </div>
            </div>
            <MusicPlayer/>
        </div>
    </div>
  )
}
