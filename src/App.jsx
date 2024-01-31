import './App.css'
import Navigation from './components/Navigation'
import MarqueeSection from './views/MarqueeSection';
// import MusicPlayer from './views/MusicPlayer'
import MusicSection from './views/MusicSection';
import Contact from './views/Contact';
import HeroSection from './views/hero';

function App() {

    function displayModeState(state) {
        document.querySelector('main').classList.toggle(`light-mode`);

        if(state){
            document.querySelector('.marquee-container').classList.remove('white-border');
            document.querySelector('.marquee-container').classList.add('black-border');
            document.querySelector('.music-content').classList.remove('white-player-border');
            document.querySelector('.music-content').classList.add('black-player-border');
            
        }else {
            document.querySelector('.marquee-container').classList.remove('black-border');
            document.querySelector('.marquee-container').classList.add('white-border');
            document.querySelector('.music-content').classList.remove('black-player-border');
            document.querySelector('.music-content').classList.add('white-player-border');
        }
            
    }

    return (
        <>

            <Navigation displayModeState={displayModeState} />

            <main className='darkMode'>
                <HeroSection />

                <MarqueeSection />

                <MusicSection />

                <Contact />
            </main>
        </>
    )
}

export default App
