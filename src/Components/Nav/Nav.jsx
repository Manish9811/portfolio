import React, { useState } from 'react'
import './Nav.css'

function Nav() {
    const [menuStatus, setMenuStatus] = useState(0);
    return (

        <>
        <span class="material-symbols-outlined navMenuIcon" onClick={() => setMenuStatus(1)}>
                menu
            </span>
        <nav>
            
            <div className="leftNavContent">
                <h1> Manish Pokhrel </h1>
            </div>


            <div className={`rightNavContent ${menuStatus ? 'showNav' : 'hideNav'}`}>

                <span class="material-symbols-outlined navCloseIcon" onClick={() => setMenuStatus(0)}>
                    X
                </span>

                <div className="rightContentLinks">

                    <a href="">Home</a>
                    <a href="">Service</a>
                    <a href="">About</a>
                    <a href="">Resume</a>
                    <a href="">Connect</a>

                </div>


            </div>
        </nav>
        </>
    )
}

export default Nav
