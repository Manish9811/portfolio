import React from 'react'
import './Home.css'
import Nav from '../../Components/Nav/Nav'
import profileImage from '../../Assests/Images/profile_image.png';
import facebookIcon from '../../Assests/Icons/facebook.png';
import insta from '../../Assests/Icons/insta.png';
import whatsapp from '../../Assests/Icons/whatsapp.png';
import TextAnimation from '../../Components/TextAnimation';




function Home() {

    return (
        <div>
            <Nav />
            <div className="homeContainer">
                <div className="leftHomeContent">
                    <img src={profileImage} alt="" />
                </div>


                <div className="rightHomeContent">
                    <h1 className='titleText'>Hii, Welcome </h1>

                    <div className="animatedText">

                        <TextAnimation text={['My Name is Manish Pokhrel', 'I am From Nepal','Please check my resume from top link',"Thanks for visiting please dont forget to give feedback"]}/>
                       
                    </div>


                    <div className="socialLinks">
                        <h1> Join with me on social media </h1>

                        <div className="appLinks">
                            <a href="https://www.facebook.com/manish.pokhrel.5059">
                                <img src={facebookIcon} alt="" />
                            </a>
                            <a href="">
                                <img src={whatsapp} alt="" />
                            </a>
                            <a href="">
                                <img src={insta} alt="" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
