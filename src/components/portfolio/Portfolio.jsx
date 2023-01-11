import React from "react";
import "./portfolio.css";
import { Container, Row, Col } from "reactstrap";

import img1 from "../../assets/img/digital-agency.png";
import img2 from "../../assets/img/portfolio.png";
import img3 from "../../assets/img/godot.png";

const portfolioData = [
  {
    imgUrl: img1,
    title: "Digital Agency Website",
    url: "https://digital-agencynetwork.herokuapp.com/",
  },
  {
    imgUrl: img2,
    title: "Portfolio Website",
    url: "https://senayakagndz-myportfolio.herokuapp.com/",
  },
  {
    imgUrl: img3,
    title: "Godot Digital Agency Website",
    url: "https://godot-agency.herokuapp.com/",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className="portfolio__top mb-5">
            <h6>Explore my work and give a feedback</h6>
            <h2>Portfolio</h2>
          </Col>
          {portfolioData.map((item, index) => {
            const { imgUrl, title, url } = item;
            return (
              <Col lg="4" md="6" sm="6" key={index}>
                <div className="portfolio__card">
                  <div className="portfolio__img">
                    <img src={imgUrl} alt="" className="w-100"></img>
                  </div>
                  <div className="portfolio__content">
                    <div className="content__top">
                      <h5>{title}</h5>
                      <a href={url} target="_blank" rel="noreferrer" >
                        View Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
