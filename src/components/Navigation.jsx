// import { useState } from "react";
import './syles/navigation.css';

export default function Navigation() {
    // JS



    // JSX
    return (
        <div className="nav_bar">
            <div className="nav_container">

                <div className="icon_container logo">Rice Band</div>

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
