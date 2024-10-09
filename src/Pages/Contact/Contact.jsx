import React, { useState } from 'react';
import './Contact.css';
import Nav from '../../Components/Nav/Nav';
import axios from 'axios';
function Contact() {
    const [username,setUsername] = useState(null);
    const [userEmail,setUserEmail] = useState(null);
    const [message,SetMessage] = useState(null);
    const [loading,setLoading] = useState(false);

    const submitForm = async () => {

        setLoading(true)

        if(!username || !userEmail || !message){
            setLoading(false)
            return alert("Please provide a username, email and message");
        }
        else{

            try{
           const serverData = await axios.post('https://portfolioserver1-95aa3a80c161.herokuapp.com/sendMail', {
                username,userEmail,message
            },
            {
                headers:{'content-type': 'application/json',},
                withCredentials: true,
                // with
            })

            setLoading(false)
            alert("Mail sent successfully !! Thanks For your response");

            setUserEmail('');
            setUsername('');
            SetMessage('');

        }
        catch(e){
            setLoading(false)
            alert("Error sending mail");
        }

        }



    }
    return (
        <>
            <Nav />

            <div className='contactContainer'>
                <h1> Contact Manish Pokhrel </h1>
                <form action="">
                    <label htmlFor="">Username : </label>
                    <input type="text" name="" id="" onChange={(e)=>setUsername(e.target.value)} value={username}/>

                    <label htmlFor="">email address : </label>
                    <input type="email" placeholder='john@gmail.com' onChange={(e)=>setUserEmail(e.target.value)} value={userEmail}/>

                    <label htmlFor="">Message : </label>
                    <input type="text" className="message" onChange={(e)=>SetMessage(e.target.value)} value={message}/>

                   {!loading && <input type="button" onClick={(e)=>submitForm(e)} value={'Submit'} className='button' />}
             <br />
                    {loading &&<> <div className="loader"></div>
                    <span>This won't take long....</span></>}
                </form>
            </div>
        </>
    )
}

export default Contact
