import React from "react";
import "./hero-section.css";
import { Container, Row, Col } from "reactstrap";
import me from "../../assets/me.png";

const HeroSection = () => {
  return (
    <section className="hero__section mt-5" id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <p className="mb-3">Welcome to my world</p>
              <div className="hero__title mb-4">
                {" "}
                <h2 className="i-name">Şenay Akagündüz</h2>
                <div className="i-title">
                  <div className="i-title-wrapper">
                    <div className="i-title-item">Frontend Developer</div>
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">Responsive Design</div>
                    <div className="i-title-item">React Developer</div>
                    <div className="i-title-item">User Friendly Projects</div>
                  </div>
                </div>
              </div>
              <p>
                I combine current design trends with your brand's identity and
                offer user-friendly websites solutions that appeal to the user.
                With our sectoral experience, we take steps in the light of
                technological developments and ensure that your brand targets
                are realized.
              </p>
            </div>
            <div className="hero__btns d-flex align-items-center gap-4 mt-5">
              <button className="btn hire__btn d-flex align-center justify-content-center">
              <i class="ri-linkedin-fill"></i><a href="https://www.linkedin.com/in/senayakagunduz/" rel="noreferrer" target="_blank">Linkedin</a>
              </button>
              <button className="btn contact__btn">
              <i class="ri-github-fill me-1"></i><a href="https://github.com/senayakagunduz" rel="noreferrer" target="_blank" >Github</a>
              </button>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={me} alt="" className="w-100 h-100 " />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
