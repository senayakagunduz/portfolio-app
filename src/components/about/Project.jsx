import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./project.css";

const Projects = () => {
  return (
    <Container className="bt-7">
      <Row lg="6" mb="6" className="d-flex">
        <Col className="w-50">
          <ProjectItem
            year="2023"
            title="Weather App for five days"
            text=" React-Tailwind-Axios-ES6"
          />
        </Col>
        <Col className="w-50">
          <ProjectItem
            year="2023"
            title="English Dictionary"
            text=" React-Tailwind-ContextApi-Axios"
          />
        </Col>
      </Row>
      <Row lg="6" mb="6" className="d-flex">
        <Col className="w-50">
          <ProjectItem
            year="2023"
            title="Nft Landing Page"
            text=" React-Bootstrap-Css-React icon"
          />
        </Col>
        <Col className="w-50">
          <ProjectItem
            year="2022"
            title="Todo App"
            text=" React-Bootstrap-Local Storage-ES6"
          />
        </Col>
        <Col className="w-50">
          <ProjectItem
            year="2022"
            title="Personal Portfolio Website"
            text=" React-Styled CSS-ES6"
          />
        </Col>
      </Row>
    </Container>
  );
};
const ProjectItem = ({ year, title, text }) => {
  return (
    <div className="single__project">
      <div className="project__year">{year}</div>
      <h6 className="project__title">
        {title}
        <span>{text}</span>
      </h6>
    </div>
  );
};

export default Projects;
