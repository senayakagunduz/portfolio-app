import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./services.css";

const servicesData = [
  {
    icon: "ri-code-line",
    title: "Web Design",
    desc: "We use Mailchimp to help use communicate updates to different departments in the organization. When we need to update a team and see how many people opened the email, clicked on the content in it, and/or watched the videos it's been really helpful. We use Mailchimp as a purely internal communication tool",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Web Development",
    desc: "We use Mailchimp to help use communicate updates to different departments in the organization. When we need to update a team and see how many people opened the email, clicked on the content in it, and/or watched the videos it's been really helpful. We use Mailchimp as a purely internal communication tool",
  },
  {
    icon: "ri-code-line",
    title: "UI/UX",
    desc: "We use Mailchimp to help use communicate updates to different departments in the organization. When we need to update a team and see how many people opened the email, clicked on the content in it, and/or watched the videos it's been really helpful. We use Mailchimp as a purely internal communication tool",
  },
  {
    icon: "ri-qr-code-line",
    title: "App Development",
    desc: "We use Mailchimp to help use communicate updates to different departments in the organization. When we need to update a team and see how many people opened the email, clicked on the content in it, and/or watched the videos it's been really helpful. We use Mailchimp as a purely internal communication tool",
  },
  {
    icon: "ri-search-line",
    title: "SEO",
    desc: "We use Mailchimp to help use communicate updates to different departments in the organization. When we need to update a team and see how many people opened the email, clicked on the content in it, and/or watched the videos it's been really helpful. We use Mailchimp as a purely internal communication tool",
  },
  {
    icon: "ri-landscape-line",
    title: "Graphic Design",
    desc: "We use Mailchimp to help use communicate updates to different departments in the organization. When we need to update a team and see how many people opened the email, clicked on the content in it, and/or watched the videos it's been really helpful. We use Mailchimp as a purely internal communication tool",
  },
];

const Services = () => {
  return (
    <section id="section">
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
