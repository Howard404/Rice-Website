import './App.css'
import Navigation from './components/Navigation'
import MarqueeSection from './views/MarqueeSection';

/* Do not forget to import Hero from ./view/Hero' */

function App() {
    return (
        <>

            <Navigation />

            {/* Keep main tag */}
            <main>
                {/* Remove content in main and add Hero component */}
                <h1 style={{ textAlign: 'center' }}>Rice Band Site</h1>
                <div className="remove-later" style={{ textAlign: 'center' }}>
                    <img src="/images/hero.jpeg" alt="hero image" width='80%' />
                </div>

                <MarqueeSection/>
            </main>
        </>
    )
}

export default App
