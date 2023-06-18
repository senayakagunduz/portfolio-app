import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./services.css";

const servicesData = [
  {
    icon: "ri-code-line",
    title: "Web Design",
    desc: "Responsive Across All Platforms: ensures that your website runs smoothly and responsively across all devices. We optimize desktop, tablet and mobile versions.",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Web Development",
    desc: "Development: Content consolidation like accolades, case studies, copywriting for your website, images then development proper for the website.   ",
  },
  {
    icon: "ri-code-line",
    title: "UI/UX",
    desc: "Custom Graphics And Development:Site Troopers tailors your website with a fully custom build and development. The website will have unique graphics and design to suit your brand image.",
  },
  {
    icon: "ri-qr-code-line",
    title: "App Development",
    desc: "Website Design Tailored For Your Business: The goal of our company is to provide as much value to your brand/business with our services. Our team has the skills and expertise to elevate your brand digitally.",
  },
  {
    icon: "ri-search-line",
    title: "SEO",
    desc: "Search Engine Optimization:Rank on Google's top page without paid marketing. Our team researches and strategizes keywords that will obtain you a top search engine ranking.",
  },
  {
    icon: "ri-landscape-line",
    title: "Responsive Design",
    desc: "Website looks clean and modern just like they had imagined. The website illustrates their brand image and is a platform where they can sell their products.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="12" mb="5" className="services__top ">
            <h6>Features</h6>
            <h2>What Services I Provide</h2>
          </Col>

          {servicesData.map((item, index) => {
            const { icon, title, desc } = item;
            return (
              <Col lg="4" md="6" sm="6" key={index} className="mb-4">
                <div className="single__service">
                  <span className="service__icon">
                    <i className={icon}></i>
                  </span>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
