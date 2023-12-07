import './App.css'
import Navigation from './components/Navigation'

function App() {
  return (
    <>

      <Navigation />  

      {/* Keep main tag */}
      <main> 

        {/* Remove content in main and add Hero component */}
        <h1 style={{textAlign: 'center'}}>Rice Band Site</h1>
        <div className="remove-later" style={{textAlign: 'center'}}>
          <img src="src/assets/hero.jpeg" alt="hero image" width='40%'/>
        </div>

      </main>
    </>
  )
}

export default App
