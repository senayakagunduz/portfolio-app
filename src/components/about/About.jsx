import React,{useState} from 'react'
import "./about.css";
import {Container,Row,Col} from "reactstrap";
import aboutImg from "../../assets/img/me.png"
import Education from './Education';

const About = () => {
const [aboutFilter,setAboutFilter]=useState("ABOUT");
  return <section id="about">
    <Container>
        <Row>
            <Col lg="12" className='mb-5'>
                <h2>About Me</h2>{" "}
            </Col>
            <Col lg="4" md="3">/**flex-column sütun olarak yazdırıyor */
                <div className='about__btns d-flex flex-column align-items-center'>
                    <button className='about__btn about__btn-active' onClick={()=>setAboutFilter("ABOUT")}>About me</button>
                    <button className='about__btn' onClick={()=>setAboutFilter("ABOUT")}>Education</button>
                    <button className='about__btn'>Skills</button>
                    <button className='about__btn'>Projects</button>
                </div>
            </Col>
            <Col lg="8" md='9'>
                 
                <div className='about__content__wrapper d-flex gap-5 mt-3'> 
                
                    <div className='about__img w-25'>
                        <img src={aboutImg} alt='' className='w-100'></img>
                    </div>

                    <div className='about__content w-75'>
                        <h2>I'm Julie Bergman</h2>
                        <p>I produce works that will bring your brand to the forefront in every medium by considering your brand 360 degrees with contemplated and creative content and projects. We create special projects for your brand by combining concepts and user experience appropriate to your brand’s needs.</p>

                        <div className='social__links'>
                            <h6 className='mb-3'>Connect width me:</h6>
                            <span><a href='#'><i class="ri-facebook-line"></i></a></span>
                            <span><a href='#'><i class="ri-youtube-line"></i></a></span>
                            <span><a href='#'><i class="ri-twitter-line"></i></a></span>
                            <span><a href='#'><i class="ri-instagram-line"></i></a></span>
                            <span><a href='#'><i class="ri-linkedin-line"></i></a></span>
                        </div>
                    </div>
                </div>
                 
            </Col>
        </Row>
    </Container>

  </section>
} 

export default About