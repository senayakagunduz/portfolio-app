import React from "react";
import "./portfolio.css";
import { Container, Row, Col } from "reactstrap";

import img1 from "../../assets/emoji.png"
import img2 from "../../assets/asiankitchen.png";
import img3 from "../../assets/dict.png";
import img4 from "../../assets/jokes.png";
import img5 from "../../assets/linkedin.png";
import img6 from "../../assets/weather.png"
import img7 from "../../assets/medium.png"
import img8 from "../../assets/nft.png"
import img9 from "../../assets/tour.png"
import img10 from "../../assets/digital-agency.png";
import img11 from "../../assets/godot.png";
import img12 from "../../assets/portfolio.png";


const portfolioData = [
  {
    imgUrl: img1,
    title: "Emoji",
    url: "https://senayakgndz-feedback-js.netlify.app",
    sourceCode: "https://github.com/senayakagunduz/feedback-js"
  },
  {
    imgUrl: img2,
    title: "Asian Kitchen",
    url: "https://senayakagunduz-asian-kitchen.netlify.app/",
    sourceCode: "https://github.com/senayakagunduz/asian-kitchen"
  },
  {
    imgUrl: img3,
    title: "English Dictionary in React",
    url: "https://senayakagndz-english-dict-tailwnd.netlify.app/",
    sourceCode: "https://github.com/senayakagunduz/en-dictionary-tailwind"
  },
  {
    imgUrl: img4,
    title: "Jokes Generator ",
    url: "https://senayakgndz-jokes.netlify.app",
    sourceCode: "https://github.com/senayakagunduz/dad_jokes"
  },
  {
    imgUrl: img5,
    title: "Linkedin Clone ",
    url: "https://senayakagunduz-linkedinclone.netlify.app",
    sourceCode: "https://github.com/senayakagunduz/linkedinclone"
  },
  {
    imgUrl: img6,
    title: "Weather App ",
    url: "https://senayakgndz-weatherapp-react.netlify.app/ ",
    sourceCode: "https://github.com/senayakagunduz/weather-app"
  },
  {
    imgUrl: img7,
    title: "Medium Clone",
    url: "https://senayakagunduz-mediumclone.netlify.app",
    sourceCode: "https://github.com/senayakagunduz/mediumclone"
  },
  {
    imgUrl: img8,
    title: "NFT Landing Page",
    url: "https://senay-akagndz-nft-landing-page.netlify.app",
    sourceCode: "https://github.com/senayakagunduz/nft-landing-side",
  },
  {
    imgUrl: img9,
    title: "Tour Website",
    url: "https://senayakgndz-backroads-website.netlify.app/",
    sourceCode: "https://github.com/senayakagunduz/backroads-app",

  },
  {
    imgUrl: img10,
    title: "Digital Agency Website",
    url: "",
    sourceCode: "https://github.com/senayakagunduz/digital-agency-site"
  },
  {
    imgUrl: img11,
    title: "Godot Website",
    url: "https://senayakgndz-dictionary-js.netlify.app",
    sourceCode: "https://github.com/senayakagunduz/english-dictionary-js"
  },
  {
    imgUrl: img12,
    title: "Portfolio Website",
    url: "",
    sourceCode: "https://github.com/senayakagunduz/portfolio-site"
  },


];
const Portfolio = () => {
  return (
    <section id="portfolio">
      
      <div className="container">
      <Col lg="12" className="mb-5">
            <h2>Projects</h2>
        </Col>
      <div className="row row-portfolio mx-5">
        {portfolioData.map((item, index) => {
          const { imgUrl, title, url, sourceCode } = item;
          return (
            <div className="d-block col-sm-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100">
                <img src={imgUrl} className="card-img-top w-100 h-100" alt="..." />
                <div class="card-footer text-body-secondary text-center">
                  <a href={url} target="_blank" rel="noreferrer">View Live Demo</a><br></br>
                  <a href={sourceCode} target="_blank" rel="noreferrer">View Source Code</a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      </div>
      
    </section>
  );
};

export default Portfolio;
/*const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className="portfolio__top mb-5">
            <h6>Explore my work and give a feedback</h6>
            <h2>Portfolio</h2>
          </Col>
          {portfolioData.map((item, index) => {
            const { imgUrl, title, url,sourceCode } = item;
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
                      <div>
                      <a href={sourceCode} target="_blank" rel="noreferrer" >
                        View Source Code
                      </a>
                      </div>
                      
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
};*/
