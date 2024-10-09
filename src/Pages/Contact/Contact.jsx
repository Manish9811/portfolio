import React from 'react';
import './Contact.css';
import Nav from '../../Components/Nav/Nav';
function Contact() {
    return (
        <>
            <Nav />

            <div className='contactContainer'>
                <h1> Contact Manish Pokhrel </h1>
                <form action="">
                    <label htmlFor="">Username : </label>
                    <input type="text" name="" id="" />

                    <label htmlFor="">email address : </label>
                    <input type="email" placeholder='john@gmail.com' />

                    <label htmlFor="">Message : </label>
                    <input type="text" className="message" />

                    <input type="button" value={'Submit'} className='button' />
                </form>
            </div>
        </>
    )
}

export default Contact
