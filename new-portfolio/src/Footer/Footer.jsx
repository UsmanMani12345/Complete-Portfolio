import React from 'react';
import './Footer.css';
import { FaGithub, FaFacebook, FaTwitter  , FaArrowAltCircleUp} from 'react-icons/fa';
const Footer = () => {
  return (
    <>
    <div className="container-fluid footer">

<h2>All Reserved Right Is Here!</h2>
    
<div className='footer-links'>
    <FaGithub className='links'/>
    <FaFacebook className='links'/>
    <FaTwitter className='links'/>
</div>

<div className="arrow">
    <a href="#header">
    <FaArrowAltCircleUp className='arrow-link'/></a>
</div>
    </div>

    
    
    </>
  )
}

export default Footer