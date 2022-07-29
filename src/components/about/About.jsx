import React, { useState } from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/img/me.png";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Project";

const About = () => {
  const [aboutFilter, setAboutFilter] = useState("ABOUT");
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>About Me</h2>{" "}
          </Col>
          <Col lg="4" md="3" sm="2">
            /**flex-column sütun olarak yazdırıyor */
            <div className="about__btns d-flex flex-column align-items-center">
              <button
                className={`about__btn ${
                  aboutFilter === "ABOUT" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutFilter("ABOUT")}
              >
                About me
              </button>

              <button
                className={`about__btn ${
                  aboutFilter === "EDUCATION" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutFilter("EDUCATION")}
              >
                Education
              </button>

              <button
                className={`about__btn ${
                  aboutFilter === "SKILLS" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutFilter("SKILLS")}
              >
                Skills
              </button>

              <button
                className={`about__btn ${
                  aboutFilter === "PROJECT" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutFilter("PROJECT")}
              >
                Projects
              </button>
            </div>
          </Col>
          <Col lg="8" md="9">
            {aboutFilter === "ABOUT" && (
              <div className="about__content__wrapper d-flex gap-5 mt-3">
                <div className="about__img w-25">
                  <img src={aboutImg} alt="" className="w-100"></img>
                </div>

                <div className="about__content w-75">
                  <h2>I'm Julie Bergman</h2>
                  <p>
                    I produce works that will bring your brand to the forefront
                    in every medium by considering your brand 360 degrees with
                    contemplated and creative content and projects. We create
                    special projects for your brand by combining concepts and
                    user experience appropriate to your brand’s needs.
                  </p>

                  <div className="social__links">
                    <h6 className="mb-3">Connect width me:</h6>
                    <span>
                      <a href="#">
                        <i className="ri-facebook-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="ri-youtube-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="ri-twitter-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="ri-instagram-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="ri-linkedin-line"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {aboutFilter === "EDUCATION" && <Education />}
            {aboutFilter === "SKILLS" && <Skills />}
            {aboutFilter === "PROJECT" && <Projects />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
