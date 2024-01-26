import MusicPlayer from "./MusicPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faSpotify, faApple, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"
import './styles/music-section.css';

export default function MusicSection() {
  return (
    <div className="music-section-container">
        <div className="music-section">

            <div className="music-header">
                <h1>Check Out Our Sound! 🎸</h1>

                <div className="music-subheader">
                    <h2>Want more Rice Band?</h2>
                    <h2>Stay updated by following us on social media! 🙇‍♂️</h2>
                </div>

                <div className="social-media">
                  <a href="https://www.instagram.com/rice_trio/"><FontAwesomeIcon icon={faInstagram} className="social-link instagram"/></a>
                  <a href="https://www.facebook.com/ricethyband"><FontAwesomeIcon icon={faFacebook} className="social-link facebook"/></a>
                  <a href="https://open.spotify.com/artist/252nRH19GUk132CXhLIOID"><FontAwesomeIcon icon={faSpotify} className="social-link spotify"/></a>
                  <a href="https://music.apple.com/us/artist/rice/1489563617"><FontAwesomeIcon icon={faApple} className="social-link apple"/></a>
                  <a href="https://www.youtube.com/channel/UCSJPQxuLdEhMj8sCeu1m2Qw/featured"><FontAwesomeIcon icon={faYoutube} className="social-link youtube"/></a>
                </div>
            </div>
            <MusicPlayer/>
        </div>
    </div>
  )
}
