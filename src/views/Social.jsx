import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faSpotify, faApple, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"
import './styles/social.css'

export default function Social() {
  return (
    <div className="social-container">
        <a href="https://music.apple.com/us/artist/rice/1489563617" className="apple-link"><FontAwesomeIcon icon={faApple} className="social-link apple"/></a>
        <a href="https://www.instagram.com/rice_trio/"><FontAwesomeIcon icon={faInstagram} className="social-link instagram"/></a>
        {/* <a href="https://www.facebook.com/ricethyband"><FontAwesomeIcon icon={faFacebook} className="social-link facebook"/></a> */}
        <a href="https://open.spotify.com/artist/252nRH19GUk132CXhLIOID"><FontAwesomeIcon icon={faSpotify} className="social-link spotify"/></a>
        <a href="https://www.youtube.com/channel/UCSJPQxuLdEhMj8sCeu1m2Qw/featured"><FontAwesomeIcon icon={faYoutube} className="social-link youtube"/></a>
    </div>
  )
}
