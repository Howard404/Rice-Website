// import { useState } from "react";
import './syles/navigation.css';
import '../index.css';
// import darkMode from '/images/dark.svg';
// import lightMode from '/images/sun.svg';
import hamburger from '/images/menu-hamburger.svg';
import x_circle from '/images/x-circle.svg';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Navigation() {
    
    // const [displayMode, setDisplayMode] = useState(false);
    const [hamburgerMode, setHamburgerMode] = useState(true);

    // function toggleDarkMode() {
    //     setDisplayMode(!displayMode);

    //     displayModeState(!displayMode);
    // }


    function handleHamburgerToggle() {
        setHamburgerMode(!hamburgerMode);

        if(hamburgerMode){
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

                <div className="icon_container logo"> <a href="#back-to-top">RICE</a></div>

                <div className="menu_items">  

                    <div className='menu_items_mobile'>  
                        <ul className="menu">
                            <li>
                                <a href="#back-to-top" className='nav-link'>HOME</a>
                            </li>

                            <li>
                                <a href="#tour" className='nav-link'>TOUR</a>
                            </li>

                            <li>
                                <a href="#media" className='nav-link'>MEDIA</a>
                            </li>

                            <li>
                                <a href="#contact" className='nav-link'>CONTACT</a>
                            </li>
{/* 
                            <li>
                                <a href="#" className='nav-link'>EPK</a>
                            </li> */}
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
