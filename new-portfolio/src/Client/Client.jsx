import React from 'react';
import './Client.css';
import Image from '../images/img1.jpg';
import Image3 from '../images/img2.jpg';
import Image1 from '../images/comma.png';
import Image2 from '../images/comma1.png';

const Client = () => {
  return (
    <>
    <div className="container-fluid client">

        <div className="client-heading">
            <h1>Client's Says</h1>
        </div>


            <div className="client-card">
            <div className="client-two">
                <div className="client-content">
                        <div className="img-client">
                            <img src={Image3} alt="" />
                            <h3>M.Khan</h3>
                        <span>Client</span>
                        </div>
                        <div className="line-client">
                        </div>
                                <div className='comma-img'>
                                <img src={Image1}  />
                                
                      
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt, nihil excepturi corrupti molestiae explicabo pariatur! Libero ad, quae vero at dolor molestiae repudiandae deleniti corporis.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            
                            </div>
                            <div className="img-two">
                            <img src={Image2} className='comma-two' />
                            </div>
                    </div>
                </div>

                <div className="client-two">
                <div className="client-content">
                        <div className="img-client">
                            <img src={Image} alt="" />
                            <h3>Ali Khan</h3>
                        <span>Client</span>
                        </div>
                        <div className="line-client">
                        </div>
                                <div className='comma-img'>
                                <img src={Image1}  />
                                
                      
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt, nihil excepturi corrupti molestiae explicabo pariatur! Libero ad, quae vero at dolor molestiae repudiandae deleniti corporis.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            
                            </div>
                            <div className="img-two">
                            <img src={Image2} className='comma-two' />
                            </div>
                    </div>
                </div>
            </div>



    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default Client