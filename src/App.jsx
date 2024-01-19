import { useState } from 'react';
import './App.css'
import Navigation from './components/Navigation'
import MarqueeSection from './views/MarqueeSection';
// import MusicPlayer from './views/MusicPlayer'
import MusicSection from './views/MusicSection';
import Contact from './views/Contact';
import HeroSection from './views/Hero';
import InstagramSection from './views/InstagramSection';

function App() {

    let [displayState, setDisplayState] = useState(false);

    function displayModeState(state) {
        setDisplayState(state);

        console.log(state);

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
            <main>
                <HeroSection />
                {/* Remove content in main and add Hero component */}
                <h1 style={{ textAlign: 'center' }}>Rice Band Site</h1>
                <div className="remove-later" style={{ textAlign: 'center' }}>
                    <img src="/images/hero.jpeg" alt="hero image" width='80%' />
                </div>

                <MarqueeSection />

                <MusicSection />

                <InstagramSection />

                <Contact />
            </main>
        </>
    )
}

export default App
