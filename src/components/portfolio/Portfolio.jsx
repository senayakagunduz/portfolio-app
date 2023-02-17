import React from "react";
import "./portfolio.css";
import { Container, Row, Col } from "reactstrap";

import img1 from "../../assets/img/havadurumu.jpg";
import img2 from "../../assets/img/asiankitchen.png";
import img3 from "../../assets/img/linkedin.png";
import img4 from "../../assets/img/medium.png";
import img5 from "../../assets/img/tour.png";

const portfolioData = [
  {
    imgUrl: img1,
    title: "Weather App",
    url: "https://senayakagunduz-weather-app.netlify.app/",
  },
  {
    imgUrl: img2,
    title: "Asian Kitchen",
    url: "https://senayakagunduz-asian-kitchen.netlify.app/",
  },
  {
    imgUrl: img3,
    title: "Linkedin Clone",
    url: "https://senayakagunduz-linkedinclone.netlify.app/",
  },
  {
    imgUrl:img4,
    title:"Medium Clone",
    url:"https://senayakagunduz-mediumclone.netlify.app/",
  },
  {
    imgUrl:img5,
    title:"Tour Website",
    url:"https://senayakgndz-backroads-website.netlify.app/",
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
                    <img src={imgUrl} alt="" className="w-100"/>
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
