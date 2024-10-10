import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
import resume from '../../Assests/Resume.pdf';

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

                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <a href={resume} download={resume}>Resume</a>
                    <Link to='/contact'>Contact</Link>

                </div>


            </div>
        </nav>
        </>
    )
}

export default Nav
