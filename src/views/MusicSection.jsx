import MusicPlayer from "./MusicPlayer";
// import SoundCloud from 'react-player'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFacebook, faSpotify, faApple, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"
import './styles/music-section.css';

export default function MusicSection() {
  return (
    <div className="music-section-container" id="media">
        <div className="music-section">

            <div className="music-header">
                <h1 className="music-header-1">Check Out Our Sound!</h1>

                <div className="music-subheader">
                    <h2>Need more music?</h2>
                    <h2>Want more Rice Band?</h2>
                    <h2>Stay updated by following us on social media! 🙇‍♂️</h2>
                </div>

              {/* <div className="social-media">
                  <a href="https://www.instagram.com/rice_trio/"><FontAwesomeIcon icon={faInstagram} className="social-link instagram"/></a>
                  <a href="https://www.facebook.com/ricethyband"><FontAwesomeIcon icon={faFacebook} className="social-link facebook"/></a>
                  <a href="https://open.spotify.com/artist/252nRH19GUk132CXhLIOID"><FontAwesomeIcon icon={faSpotify} className="social-link spotify"/></a>
                  <a href="https://music.apple.com/us/artist/rice/1489563617" className="apple"><FontAwesomeIcon icon={faApple} className="social-link apple"/></a>
                  <a href="https://www.youtube.com/channel/UCSJPQxuLdEhMj8sCeu1m2Qw/featured"><FontAwesomeIcon icon={faYoutube} className="social-link youtube"/></a>
                </div> */}
            </div>

            {/* <SoundCloud
              url={'https://soundcloud.com/thebandrice/sets/ross-tuesdays'}
              width={600}
              height={550}
              config={{
                soundcloud: {
                  options: {show_artwork: false}
                }
              }}
              className='sound-cloud'
            /> */}
            <MusicPlayer/>
        </div>

    </div>
  )
}

{/* <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/728289963&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />

<div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
  
  <a href="https://soundcloud.com/thebandrice" title="Rice" target="_blank" style="color: #cccccc; text-decoration: none;">Rice</a> · 
  <a href="https://soundcloud.com/thebandrice/sets/ross-tuesdays" title="Ross Tuesdays" target="_blank" style="color: #cccccc; text-decoration: none;">Ross Tuesdays</a>
  
</div> */}
