import React from 'react';
import './Skill.css';
import Image1 from '../images/css.png';
import Image2 from '../images/bootstrap.svg';
import Image3 from '../images/react.png';
import Image4 from '../images/javascript.svg';
 import Image5 from '../images/php.png';
 import Image6 from '../images/jquery.png';
     import Image from '../images/html.svg';


import { FaCode,FaAndroid,FaLaptopCode } from 'react-icons/fa';


const Skill = () => {
  return (
    <>
    <div className="container-fluid skill">
        <div className="heading-skill">
            <h1>My skills</h1>
        </div>
       <div className="skill-content">
        <div className="skill-left">
            <div className="skill-box">
                <div className="box-web">
                <FaCode size={30} color="white" />
                    <span>Web Developer</span>
                </div>

                <div className="box-web">
                <FaLaptopCode size={30} color="white" />
      <span>Full Stack Developer</span>
                </div>

                <div className="box-web">
                <FaAndroid size={30} color="white" />
      <span>Android Developer</span>
                </div>
            </div>
    
            <div className="skill-para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita modi ducimus id beatae hic laboriosam magni soluta, rem dolore itaque eos delectus accusamus, tenetur ipsum molestiae, recusandae nemo minus? Odit beatae aspernatur tenetur labore vero autem quia atque nostrum! Ipsum ex vitae ut ad cupiditate voluptatibus perspiciatis quibusdam repellendus. Fugiat.</p>
            </div>
        
        </div>
            

            <div className="skill-right">
                <div className="all-images">
                    <div className="right-one">
                        <div><img src={Image1} alt="" /></div>
                        <div><img src={Image2} alt="" /></div>
                        <div><img src={Image3} alt="" /></div>
                    </div>

                    <div className="right-center">
                        <img src={Image} alt="" />
                    </div>

                    <div className="right-one">
                        <div><img src={Image4} alt="" /></div>
                        <div><img src={Image5} alt="" /></div>
                        <div><img src={Image6} alt="" /></div>
                    </div>
                </div>
            </div>
    
       </div>




    </div>
    
    
    
    
    </>
  )
}

export default Skill