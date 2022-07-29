import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./contact.css";
import Form from "../form/Form";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <Container>
        <h3>Get In Touch</h3>
        <Row className="row">
          <Col lg="6" md="6" style={{ width: "300px" }}>
            <div className="contact__info-container">
              <div className="single__info-box">
                <h6>Address</h6>
                <p>Turkiye, Istanbul</p>
              </div>
            </div>
            <div className="contact__info-container">
              <div className="single__info-box">
                <h6>Phone</h6>
                <p>+90 539 663 7014</p>
              </div>
            </div>
            <div className="contact__info-container">
              <div className="single__info-box">
                <h6>Email</h6>
                <p>example@gmail.com</p>
              </div>
            </div>
            <div className="contact__info-container">
              <div className="single__info-box">
                <h6>Location</h6>
                <p>Turkiye, Istanbul</p>
              </div>
            </div>
          </Col>
          <div className="col lg-6 md-6">
            <div className="contact__info-container">
              <div className="single__info-box">
                <Form />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
