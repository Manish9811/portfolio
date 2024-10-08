import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
import downloadablwfile from '../../Assests/Images/profile_image.png';

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
                    <a href={downloadablwfile} download={'https://manishportfolio-32d3882b9f87.herokuapp.com/static/media/profile_image.93c8f6063904abbb4afa.png'}>Resume</a>
                    <a href="">Connect</a>

                </div>


            </div>
        </nav>
        </>
    )
}

export default Nav
