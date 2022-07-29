import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./project.css";

const Projects = () => {
  return (
    <Container className="bt-7">
      <Row lg="6" mb="6" className="d-flex">
        <Col className="w-50">
          <ProjectItem
            year="2020"
            title="Digital Agency Website"
            text=" React-CSS-ES6"
          />
        </Col>
        <Col className="w-50">
          <ProjectItem
            year="2020"
            title="Portfolio Website"
            text=" React Digital Agency Website"
          />
        </Col>
      </Row>
      <Row lg="6" mb="6" className="d-flex">
        <Col className="w-50">
          <ProjectItem
            year="2020"
            title="Agency Website"
            text=" React-Styled CSS-ES6"
          />
        </Col>
        <Col className="w-50">
          <ProjectItem
            year="2020"
            title="Agency Website"
            text=" React-Styled CSS-ES6"
          />
        </Col>
      </Row>
    </Container>
    //  <div className='project__container d-flex align-items-center flex-wrap justify-content-between'></div>
  );
};
const ProjectItem = ({ year, title, text }) => {
  return (
    <div className="single__project">
      <div className="project__year">{year}</div>
      <h6 className="project__title">
        {title}- <span>{text}</span>
      </h6>
    </div>
  );
};

export default Projects;
