import React from 'react';
import './About.css';
import Image from '../images/img2.jpg';
import Image1 from '../images/tick.svg';

const About = () => {
  return (
    <>
    
    <div className="about">
    <div className="heading">
        <h1>About <span> M</span>e</h1>
    </div>

    <div className="container about-content">
        <div className="about-row">
            <div className=" about-img">
                <img src={Image} alt="" />
            </div>

    <div className="  about-right">
        <div className="about-box">
            <div className="box">
                <img src={Image1} alt="" />
                <h3>100+</h3>
                <span>Project Completed</span>
            </div>
            <div className="box">
                <img src={Image1} alt="" />
                <h3>1+</h3>
                <span>Years Experience</span>
            </div>
            <div className="box">
                <img src={Image1} alt="" />
                <h3>30+</h3>
                <span>Custom reviews</span>
            </div>
        </div>

        <div className="about-para">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur culpa odit rerum alias architecto maxime ducimus dignissimos voluptatibus dolorem inventore, reprehenderit eos dolore repudiandae provident dolorum repellat aut voluptatem similique.</p>
        </div>

        
        <div className="about-para">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur culpa odit rerum alias architecto maxime ducimus dignissimos voluptatibus dolorem inventore, reprehenderit eos dolore repudiandae provident dolorum repellat aut voluptatem similique.</p>
        </div>
<div className='about-btn'>
        <button className='work'>Download CV</button>
        </div>
    </div>


    
        </div>
    </div>




    </div>
    
    
    

    
    
    
    
    </>
  )
}

export default About