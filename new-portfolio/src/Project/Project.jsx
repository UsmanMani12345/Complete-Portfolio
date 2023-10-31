import React from 'react';
import './Project.css';
import Image from "../images/web.jpg";
import Image1 from "../images/web1.jpg";
import Image2 from "../images/web2.jpg";
const Project = () => {
  return (
    <>
    <div className="container-fluid project">
    <div className="heading">
        <h1>My Projects</h1>
    </div>


    <div className="btn-project">
        <a href="" className='active'>All</a>
        <a href="" >FrontEnd</a>
        <a href="" >BackEnd</a>
        <a href="" >Full Stack</a>
    </div>

{/* cards */}

        <div className="container card-dark">
            <div className="card-one">
                <div className="card-img">
                    <img src={Image} alt="" />
                </div>
                <div className="card-content">
                    <h3>Education Website(React)</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat nesciunt veritatis nemo debitis ratione delectus accusantium cumque perferendis. Fuga?</p>
                </div>

                <div className="card-btn">
                    <a href="" className='preview'>Preview</a>
                    <a href="" className='github'>Github</a>
                </div>
            </div>

            <div className="card-one">
            <div className="card-img">
                    <img src={Image1} alt="" />
                </div>
                <div className="card-content">
                    <h3>Portfolio(Html5+)</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat nesciunt veritatis nemo debitis ratione delectus accusantium cumque perferendis. Fuga?</p>
                </div>

                <div className="card-btn">
                    <a href="" className='preview'>Preview</a>
                    <a href="" className='github'>Github</a>
                </div>
            </div>
            <div className="card-one">
            <div className="card-img">
                    <img src={Image2} alt="" />
                </div>
                <div className="card-content">
                    <h3>Portfolio Website(Next)</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat nesciunt veritatis nemo debitis ratione delectus accusantium cumque perferendis. Fuga?</p>
                </div>

                <div className="card-btn">
                    <a href="" className='preview'>Preview</a>
                    <a href="" className='github'>Github</a>
                </div>
            </div>

{/* card2 */}


<div className="card-one">
                <div className="card-img">
                    <img src={Image1} alt="" />
                </div>
                <div className="card-content">
                    <h3>Education Website(React)</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat nesciunt veritatis nemo debitis ratione delectus accusantium cumque perferendis. Fuga?</p>
                </div>

                <div className="card-btn">
                    <a href="" className='preview'>Preview</a>
                    <a href="" className='github'>Github</a>
                </div>
            </div>


            <div className="card-one">
                <div className="card-img">
                    <img src={Image2} alt="" />
                </div>
                <div className="card-content">
                    <h3>Education Website(React)</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat nesciunt veritatis nemo debitis ratione delectus accusantium cumque perferendis. Fuga?</p>
                </div>

                <div className="card-btn">
                    <a href="" className='preview'>Preview</a>
                    <a href="" className='github'>Github</a>
                </div>
            </div>


            <div className="card-one">
                <div className="card-img">
                    <img src={Image} alt="" />
                </div>
                <div className="card-content">
                    <h3>Education Website(React)</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat nesciunt veritatis nemo debitis ratione delectus accusantium cumque perferendis. Fuga?</p>
                </div>

                <div className="card-btn">
                    <a href="" className='preview'>Preview</a>
                    <a href="" className='github'>Github</a>
                </div>
            </div>
        </div>


    </div>
    
    
    </>
  )
}

export default Project