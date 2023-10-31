import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
    
    <div className="container-fluid contact">
        <div className="contact-heading">
            <h1>Contact Me</h1>
    </div>
<div className='contact-detail'>
    <div className="contact-input">
        <input type="text" name='First name' placeholder='First name' />
        <input type="text" name='Last name' placeholder='Last name' />
    </div>
        <div className="email-contact">
        <input type="email" name='email' placeholder='Enter Your Email' />
            </div>


        <div className="email-text">
        <textarea placeholder='Message'></textarea>

        </div>

        <div className='div-submit'><a href=""> Send Message </a></div>

        </div>
    </div>
    
    
    
    
    </>
  )
}

export default Contact