import React from 'react';
import './Header.css';
import {FaGithub, FaLinkedin , FaInstagram } from 'react-icons/fa';
import Image from '../images/img1.jpg';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <div className="container-fluid header" id="header">
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
            
            <a href="https://github.com/UsmanMani12345"><FaGithub className='icon' size={30}/></a>
            <a href="https://www.linkedin.com/in/usman-jamil-a84338288/"><FaLinkedin className='icon' size={30}/></a>
            <FaInstagram  className='icon' size={30}/>

        </div>
        </div>
    </div>

{/* Navbar End */}


        <div className="container-fluid header-content">
            <div className="row">
                <div className="col-md-6">
                <div className="heading">
            <h1>Hi I'M <span> Muhammad Usman Jamil </span></h1>
            <h3>A Web Developer</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Eaque provident aut dolor commodi maxime suscipit voluptas fugiat,<br/> alias asperiores quibusdam explicabo magni  eligendi.</p>
        </div>
    <div className="button-content">
        <button className='hire'>Hire Me</button>
        <button className='work'>My Work</button>
    </div>

                </div>


    <div className="col-md-6">
                <div className="header-img">
                    <img src={Image} alt="" />
                </div>
                </div>
            </div>
        </div>
    
    
    




    </div>
    
    
    
    
    
    
    
    
    </>
  )
}

export default Header