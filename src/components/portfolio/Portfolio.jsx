import React from "react";
import "./portfolio.css";
import { Container, Row, Col } from "reactstrap";

import tvmaze from "../../assets/tvmaze.jpg";
import dictionary from "../../assets/dict.png";
import jokes from "../../assets/jokes.png";
import linkedin from "../../assets/linkedin.png";
import sidebar from "../../assets/sidebar.png"
import medium from "../../assets/medium.png"
import nft from "../../assets/nft.png"
import tour from "../../assets/tour.png"
import agency from "../../assets/digital-agency.png";
import godot from "../../assets/godot.png";
import portfolio from "../../assets/portfolio.png";
import emoji from "../../assets/emoji.png"
import kitchen from "../../assets/asiankitchen.png";
import rentcar from "../../assets/vantageride-min.png";
import cookery from "../../assets/cookery_port.png"
import onemore from "../../assets/onemore-min.png";
import weatherapp from "../../assets/weather-app.jpeg"
import formik from "../../assets/formik.jpg"



const portfolioData = [
  {
    imgUrl: rentcar,
    title: "Rent Car Project",
    url: "https://www.vantageride.com/",
    sourceCode: "https://github.com/senayakagunduz/pickanddrive-son"
  },
  {
    imgUrl: cookery,
    title: "Cookery E-commerce Project",
    url: "https://github.com/cookery-tech/cookery",
    sourceCode: "https://github.com/cookery-tech/cookery"
  },
  {
    imgUrl: onemore,
    title: "One More Clone",
    url: "https://senay-akagunduz-networkmarketing.netlify.app",
    sourceCode: "https://github.com/senayakagunduz/OneMoreClone"
  },
  {
    imgUrl: tvmaze,
    title: "Film Project",
    url: "https://tvmaze-js.netlify.app/",
    sourceCode: "https://github.com/senayakagunduz/JS-FILM-PROJECT"
  },
  {
    imgUrl: weatherapp,
    title: "Film Project",
    url: "https://64a0223b04804b2d940f870c--senayakagunduz-weather-app.netlify.app/",
    sourceCode: "https://github.com/senayakagunduz/forecast-app"
  },
  {
    imgUrl: formik,
    title: "Login Project",
    url: " https://formikyup-login-validation.netlify.app/",
    sourceCode: "https://github.com/senayakagunduz/loginpage-reactvite"
  },
 
  {
    imgUrl: dictionary,
    title: "English Dictionary in React",
    url: "https://senayakagndz-english-dict-tailwnd.netlify.app/",
    sourceCode: "https://github.com/senayakagunduz/en-dictionary-tailwind"
  },
  {
    imgUrl: jokes,
    title: "Jokes Generator ",
    url: "https://senayakgndz-jokes.netlify.app",
    sourceCode: "https://github.com/senayakagunduz/dad_jokes"
  },
  {
    imgUrl: linkedin,
    title: "Linkedin Clone ",
    url: "https://senayakagunduz-linkedinclone.netlify.app",
    sourceCode: "https://github.com/senayakagunduz/linkedinclone"
  },
  {
    imgUrl: sidebar,
    title: "Next-js Sidebar with Tailwind ",
    url: "https://side-nav-with-submenus-git-master-senayakagunduz.vercel.app/",
    sourceCode: "https://github.com/senayakagunduz/side-nav-with-submenus"
  },
  {
    imgUrl: medium,
    title: "Medium Clone",
    url: "https://senayakagunduz-mediumclone.netlify.app",
    sourceCode: "https://github.com/senayakagunduz/mediumclone"
  },
  {
    imgUrl: nft,
    title: "NFT Landing Page",
    url: "https://senay-akagndz-nft-landing-page.netlify.app",
    sourceCode: "https://github.com/senayakagunduz/nft-landing-side",
  },
  {
    imgUrl: tour,
    title: "Tour Website",
    url: "https://senayakgndz-backroads-website.netlify.app/",
    sourceCode: "https://github.com/senayakagunduz/backroads-app",

  },
  {
    imgUrl: agency,
    title: "Digital Agency Website",
    url: "",
    sourceCode: "https://github.com/senayakagunduz/digital-agency-site"
  },
  {
    imgUrl: godot,
    title: "Godot Website",
    url: "https://senayakgndz-dictionary-js.netlify.app",
    sourceCode: "https://github.com/senayakagunduz/english-dictionary-js"
  },
  {
    imgUrl: portfolio,
    title: "Portfolio Website",
    url: "",
    sourceCode: "https://github.com/senayakagunduz/portfolio-site"
  },
  {
    imgUrl: kitchen,
    title: "Asian Kitchen",
    url: "https://senayakagunduz-asian-kitchen.netlify.app/",
    sourceCode: "https://github.com/senayakagunduz/asian-kitchen"
  },
  {
    imgUrl: emoji,
    title: "Emoji",
    url: "https://senayakgndz-feedback-js.netlify.app",
    sourceCode: "https://github.com/senayakagunduz/feedback-js"

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
