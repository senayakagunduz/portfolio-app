import React, { useState } from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/img/profil.png";
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
          <Col lg="4" md="4" sm="4">
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
          <Col lg="8" md="8" sm="8">
            {aboutFilter === "ABOUT" && (
              <div className="about__content__wrapper d-flex gap-5 mt-3">
                <div className="about__img w-25">
                  <img src={aboutImg} alt="" className="w-100"></img>
                </div>

                <div className="about__content w-75">
                  <h2>I'm Şenay Akagündüz</h2>
                  <p>
                    I produce works that will bring your brand to the forefront
                    in every medium by considering your brand 360 degrees with
                    contemplated and creative content and projects. I create
                    special projects for your brand by combining concepts and
                    user experience appropriate to your brand’s needs.
                  </p>

                  <div className="social__links">
                    <h6 className="mb-3">Connect width me:</h6>

                    <span>
                      <a href="https://www.youtube.com" target="_blank">
                        <i className="ri-youtube-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://twitter.com/senayakgnz?t=8DfBwrwQDSrFv0659TX2PA&s=08"
                        target="_blank"
                      >
                        <i className="ri-twitter-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.linkedin.com/in/%C5%9Fenay-akag%C3%BCnd%C3%BCz-b3986b180"
                        target="_blank"
                      >
                        <i className="ri-linkedin-line" />
                      </a>
                    </span>
                    <span>
                      <a href="https://www.instagram.com" target="_blank">
                        <i className="ri-instagram-line" />
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
