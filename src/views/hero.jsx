import './styles/hero.css'

function hero() {

    return (
        <div className='hero-conatiner'>
            <div className='header-top'>
                <h1 className='hero-header-left'>R.I.C.E - BAND</h1>
                <img src="/images/hero.jpeg" width='80%' className='hero-image'/>
                <h1 className='hero-header-right'>RICE - IS - NICE</h1>
            </div>
            {/* <h1 className='hero-header-bottom'>All American Rock & Roll</h1> */}
            <h1 className='hero-header-bottom'>ALL AMERICAN ROCK & ROLL</h1>
        </div>
    );
}

export default hero;
