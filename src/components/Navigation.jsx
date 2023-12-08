// import { useState } from "react";
import './syles/navigation.css';
import '../index.css';
import darkMode from '../../public/images/dark.svg';
import lightMode from '../../public/images/sun.svg';
import { useState } from 'react';

export default function Navigation() {
    
    const [displayMode, setDisplayMode] = useState(false);

    function toggleMode() {
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

    // JSX RENDERED PAGE
    return (
        <div className="nav_bar">
            <div className="nav_container">

                <div className="icon_container logo">Rice Band <span><img src={displayMode ? lightMode : darkMode} alt="dark mode" width={20} onClick={toggleMode}/></span></div>

                <div className="menu_items menu_items_mobile">  

                    <ul className="menu">
                        <li>
                            <a href="#">Home</a>
                        </li>

                        <li>
                            <a href="#">Tour</a>
                        </li>

                        <li>
                            <a href="#">EPK</a>
                        </li>

                        <li>
                            <a href="#">Newletter</a>
                        </li>
                    </ul>

                    <div className="hamburger_container">
                            {/* Position Hamburger as absolute */}
                            <input type='checkbox' className="hamburger"></input>
                    </div>

                </div>
            </div>
        </div>
    )
}
