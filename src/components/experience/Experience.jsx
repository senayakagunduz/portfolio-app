import React from "react";
import "./experience.css";
import { Container, Row, Col } from "reactstrap";

const experienceData = [
  {
    year: "2022-2023",
    title: "Frontend Developer",
    desc: " I produced web projects in React Js and JavaScript, I used  Redux-Toolkit,Bootstrap, Tailwind, CSS, SASS, SCSS and HTML5",
  },
  {
    year: "2020-2021",
    title: "Frontend Developer",
    desc: " I produce projects that will works html, css and vanilla JavaScript.",
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
