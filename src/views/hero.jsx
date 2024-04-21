import './styles/hero.css'

function hero() {

    const handleOnClick = () => {
        console.log('go to ditro');
        document.location.href = 'https://distrokid.com/hyperfollow/rice1/ross-tuesdays';
    }

    return (
        <div className='hero-container' id="back-to-top">
            {/* <div className='header-top'> */}
                {/* <h1 className='hero-header-left'>R.I.C.E - BAND</h1> */}

                    <img src="/images/Album.jpeg" className='hero-image' onClick={handleOnClick}/>
                    <button className="stream-btn" onClick={handleOnClick}>STREAM NOW</button>
                {/* <h1 className='hero-header-right'>RICE - IS - NICE</h1> */}
            {/* </div> */}
            {/* <h1 className='hero-header-bottom'>All American Rock & Roll</h1> */}
            {/* <h1 className='hero-header-bottom'>ALL AMERICAN ROCK & ROLL</h1> */}
        </div>
    );
}

export default hero;
