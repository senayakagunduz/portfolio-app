import React from "react";
import "./portfolio.css";
import { Container, Row, Col } from "reactstrap";

import img1 from "../../assets/img/emoji.png"
import img2 from "../../assets/img/asiankitchen.png";
import img3 from "../../assets/img/dictionary-tailwind.png";
import img4 from "../../assets/img/jokes.png";
import img5 from "../../assets/img/linkedin.png";
import img6 from "../../assets/img/weather.png"
import img7 from "../../assets/img/medium.png"
import img8 from "../../assets/img/nft.png"
import img9 from "../../assets/img/tour.png"
import img10 from "../../assets/img/js-dictionary.png";


const portfolioData = [
  {
    imgUrl:img1,
    title:"Emoji",
    url:"https://senayakgndz-feedback-js.netlify.app",
    sourceCode:""
  },
  {
    imgUrl: img2,
    title: "Asian Kitchen",
    url: "https://senayakagunduz-asian-kitchen.netlify.app/",
    sourceCode:"https://github.com/senayakagunduz/asian-kitchen"
  },
  {
    imgUrl: img3,
    title: "English Dictionary in React",
    url: "https://senayakagndz-english-dict-tailwnd.netlify.app/",
    sourceCode:"https://github.com/senayakagunduz/en-dictionary-tailwind"
  },
  {
    imgUrl:img4,
    title:"Jokes Generator ",
    url:"https://senayakgndz-jokes.netlify.app https://senayakagunduz-mediumclone.netlify.app/",
    sourceCode:""
  },
  {
    imgUrl:img5,
    title:"Linkedin Clone ",
    url:"https://senayakagunduz-linkedinclone.netlify.app/ ",
    sourceCode:"https://github.com/senayakagunduz/linkedinclone"
  },
  {
    imgUrl:img6,
    title:"Weather App ",
    url:"https://senayakgndz-weatherapp-react.netlify.app/ ",
    sourceCode:"https://github.com/senayakagunduz/weather-app"
  },
  {
    imgUrl:img7,
    title:"Medium Clone",
    url:"https://senayakagunduz-mediumclone.netlify.app",
    sourceCode:"https://github.com/senayakagunduz/mediumclone"
  },
  {
    imgUrl:img8,
    title:"NFT Landing Page",
    url:"https://senay-akagndz-nft-landing-page.netlify.app",
    sourceCode:"https://github.com/senayakagunduz/nft-landing-side",
  },
  {
    imgUrl:img9,
    title:"Tour Website",
    url:"https://senayakgndz-backroads-website.netlify.app/",
    sourceCode:"https://github.com/senayakagunduz/backroads-app",
    
  },
  {
    imgUrl: img10,
    title: "English Dictionary in JavaScript",
    url: "https://senayakgndz-dictionary-js.netlify.app",
    sourceCode:"https://github.com/senayakagunduz/english-dictionary-js"
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
};

export default Portfolio;
