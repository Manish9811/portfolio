import React, { useState } from 'react';
import "./About.css";
import Nav from '../../Components/Nav/Nav';

function About() {
    const [activeCard,setActiveCard] = useState(null)
    return (
        <div>
            <Nav />
            <h1 className='titleText'>About Me</h1>

            <div className="aboutContainer">
            <div className="cardsContainer">
                <div className="card">
                    <h1 onClick={()=> activeCard == 1 ? setActiveCard(null) : setActiveCard(1)}> My personal Info </h1>

                    <div className={`cardContent ${activeCard != 1 ? 'hide':"show"}`}>
                       
                        <p> 1) Name : Manish Pokhrel</p>
                        <p> 2) Birh Place : Nepal (Kapilvastu)</p>
                        <p> 3) Current Address : Australia</p>
                        <p> 4) Suburb : Auburn 2144, NSW</p>
                        <p> 5) Visa type : Student Visa </p>
                        <p> 6) Visa Until : 2026 july</p>
                    </div>
                </div>
                <div className="card ">
                <h1 onClick={()=>activeCard == 2 ? setActiveCard(null) :setActiveCard(2)}> My Coding Journey </h1>

                <div className={`cardContent ${activeCard != 2 ? 'hide':"show"}`}>
                    <p>Start to do coding from last 2 years. whatever i learn i learn by myself by the help of internet. I dont have any real world coding experience but i have 2 main full stack projects which are whatsapp clone, e commerce website using my self gain knowledge. and now i want to get some real world coding experience. You can check my resume for more details and also you can email me directly from my portfolio. </p>
                </div>


                </div>
                <div className="card ">
                <h1 onClick={()=>activeCard == 3 ? setActiveCard(null) :setActiveCard(3)}> My Skill </h1>
                <div className={`cardContent ${activeCard != 3 ? 'hide':"show"}`}>
                <p> 1) Node Js</p>
                        <p> 2) Express JS (Backend)</p>
                        <p> 3) React.JS (Frontend)</p>
                        <p> 4)My sql (Database)</p>
                        <p> 5) Basic AWS RDS (Cloud) </p>
                        <p> 6) Socket (Real time communication)</p>
                        <p> 7) Node Mailer (Notification service)</p>

                </div>

                </div>
            </div>
            </div>
        </div>
    )
}

export default About
