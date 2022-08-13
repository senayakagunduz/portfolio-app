import React from "react";
import "./experience.css";
import { Container, Row, Col } from "reactstrap";

const experienceData = [
  {
    year: "2022-2021",
    title: "Frontend Developer",
    desc: " I produced bootstrap web projects, such as portfolio and digital agency websites. My projects are in React, I used Bootstrap, Reactstrap, ES6, CSS and HTML",
  },
  {
    year: "2021-2020",
    title: "Backend Developer",
    desc: " I produced some Java Spring projects,these are Human Recourse api and School management api, they are creative content and projects",
  },
  {
    year: "2020-2019",
    title: "Frontend Developer",
    desc: " I produce works that will bring your brand to the forefront in every medium by considering your brand 360 degrees with contemplated and creative content and projects",
  },
];
const Experience = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Experience</h2>
          </Col>
          {/* <Col lg="6" md="6">
         eğer iki sütün yapmak istersek  <col lg="6" yapıp içini map func ile doldurucaz single__experience-container ile.
          </Col> */}
          <Col lg="12" md="12">
            <div className="single__experience-container">
              {experienceData.map((item, index) => {
                return (
                  <div className="single__experience" key={index}>
                    <span className="experience__icon">
                      <i className="ri-briefcase-line"></i>{" "}
                    </span>
                    <h6>{item.year}</h6>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
