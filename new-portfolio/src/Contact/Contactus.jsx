import React from 'react';
import '../Header/Header.css';
import {FaGithub, FaLinkedin , FaInstagram } from 'react-icons/fa';
import Image from '../images/img1.jpg';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Contact from './Contact';
import Footer from '../Footer/Footer';

const Contactus = () => {
  return (
    <>
    
    <div className="header-navbar">
        <div className="navbar">
        <div className="navbar-port">
            <h1>Port<span>folio</span></h1>
        </div>
        <div className="navbar-anchor">
            <ul>
            <li>
                <Link to="/" >
                Home</Link></li>
                <li>
                <Link to="/aboutus" >
                About</Link></li>
                <li>
                <Link to="/skill" >
                Skills</Link></li>
                <li>
                <Link to="/contactus" >
                Contact</Link></li>
                <li>
                <Link to="/project" >
                Projects</Link></li>
                
                
            </ul>
        </div>

        <div className="navbar-links">
            <FaGithub className='icon' size={30}/>
            <FaLinkedin  className='icon'  size={30}/>
            <FaInstagram  className='icon' size={30}/>

        </div>
        </div>
    </div>



    

    <Contact/>

    <Footer/>
    </>
  )
}

export default Contactus