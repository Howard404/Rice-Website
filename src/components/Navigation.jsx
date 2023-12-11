// import { useState } from "react";
import './syles/navigation.css';
import '../index.css';
import darkMode from '/images/dark.svg';
import lightMode from '/images/sun.svg';
import hamburger from '/images/menu-hamburger.svg';
import x_circle from '/images/x-circle.svg';
import { useState } from 'react';

export default function Navigation() {
    
    const [displayMode, setDisplayMode] = useState(false);
    const [hamburgerMode, setHamburgerMode] = useState(true);

    function toggleDarkMode() {
        setDisplayMode(!displayMode);
        handleToggleEvent(displayMode);
    }

    function handleToggleEvent(modeValue) {
        if(modeValue){
            document.querySelector('main').style.background = '#0F0F0F';
            document.querySelector('main').style.color = '#FFFFF9';
        }else {
            document.querySelector('main').style.background = '#FFFFF9';
            document.querySelector('main').style.color = '#0F0F0F';
        }
    }

    function handleHamburgerToggle() {
        setHamburgerMode(!hamburgerMode);
        toggleHamburgerMode(hamburgerMode)
    }

    function toggleHamburgerMode(modeValue) {
        if(modeValue){
            document.querySelector('.menu_items_mobile').classList.add('active');
            document.querySelector('.menu').classList.add('visible');
        }else {
            document.querySelector('.menu_items_mobile').classList.remove('active');
            document.querySelector('.menu').classList.remove('visible');
        }

    }


    // JSX RENDERED PAGE
    return (
        <div className="nav_bar">
            <div className="nav_container">

                <div className="icon_container logo"> R.I.C.E <span><img src={displayMode ? darkMode : lightMode} alt="dark mode" onClick={toggleDarkMode}/></span></div>

                <div className="menu_items">  

                    <div className='menu_items_mobile'>  
                        <ul className="menu">
                            <li>
                                <a href="#">HOME</a>
                            </li>

                            <li>
                                <a href="#">TOUR</a>
                            </li>

                            <li>
                                <a href="#">EPK</a>
                            </li>

                            <li>
                                <a href="#">NEWSLETTER</a>
                            </li>
                        </ul>
                    </div>

                    <div className="hamburger_container">
                            <img className='hamburger' src={hamburgerMode ? hamburger : x_circle} alt="Hamburger Menu" width={25} onClick={handleHamburgerToggle}/>
                    </div>

                </div>
            </div>
        </div>
    )
}
