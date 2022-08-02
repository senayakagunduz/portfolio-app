import React, { useRef, useEffect } from "react";
import "./hero-section.css";
import { init } from "ityped";
import { Container, Row, Col } from "reactstrap";
import Me from "../../assets/img/me.png";

const HeroSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      showCursor: false,
      strings: ["Web Developer"],
    });
  }, []);

  //   useEffect(()=>{
  //     init(textRef.current,{
  //         backDelay:1500,
  //         showCursor:true,
  //         strings:[
  //             "Julie Bergman",
  //             "Web Developer",
  //             "Content Creator"
  //         ]
  //     })
  //   },[])
  return (
    <section className="hero__section" id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <p className="mb-3">Welcome to my world</p>
              <h2 className="hero__title mb-4">
                {" "}
                I am <span ref={textRef}></span>
              </h2>
              <p>
                We combine current design trends with your brand’s identity and
                offer user-friendly websites solutions that appeal to the user.
                With our sectoral experience, we take steps in the light of
                technological developments and ensure that your brand targets
                are realized.
              </p>
            </div>
            <div className="hero__btns d-flex align-items-center gap-4 mt-5">
              <button className="btn hire__btn">
                <a href="#">Hire me</a>
              </button>
              <button className="btn contact__btn">Contact</button>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={Me} alt="" className="w-100 h-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
