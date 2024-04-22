import { useState } from 'react';
import './App.css'
import Navigation from './components/Navigation';
// import MarqueeSection from './views/MarqueeSection';
// import MusicPlayer from './views/MusicPlayer'
import Tour from './views/Tour'
import MusicSection from './views/MusicSection';
import Contact from './views/Contact';
import HeroSection from './views/hero';
import InstagramPosts from './views/InstagramPosts';
import Social from './views/Social';
// import InstagramSection from './views/InstagramSection';

function App() {

    let [displayState, setDisplayState] = useState(false);

    function displayModeState(state) {
        setDisplayState(state);

        if (displayState) {
            document.querySelector('main').style.background = '#0F0F0F';
            document.querySelector('main').style.color = '#FFFFF9';
            document.querySelector('main').style.borderColor = '#FFFFF9';
            document.querySelector('.marquee-container').classList.remove('black-border');
            document.querySelector('.marquee-container').classList.add('white-border');
            document.querySelector('.music-content').classList.remove('black-player-border');
            document.querySelector('.music-content').classList.add('white-player-border');
        } else {
            document.querySelector('main').style.background = '#FFFFF9';
            document.querySelector('main').style.color = '#0F0F0F';
            document.querySelector('.marquee-container').classList.remove('white-border');
            document.querySelector('.marquee-container').classList.add('black-border');
            document.querySelector('.music-content').classList.remove('white-player-border');
            document.querySelector('.music-content').classList.add('black-player-border');
        }
    }

    return (
        <>
            <Navigation displayModeState={displayModeState} />

            {/* Keep main tag */}
            <Social />
            <main>
                <HeroSection />

                {/* <MarqueeSection /> */}

                <Tour />

                <MusicSection />

                < InstagramPosts />

                {/* <InstagramSection /> */}

                <Contact />
            </main>
        </>
    )
}

export default App
