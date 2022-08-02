import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./testimonial.css";
import Slider from "react-slick"; //kaydırma işini yapmak için kullanıyoruz

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-3 text-center">
            <h2>What my clients says</h2>
          </Col>
          <Col lg="6" className="m-auto">
            <Slider {...settings}>
              <div>
                <div className="single__testimonial">
                  <p>
                    All too often, digital agencies get too wrapped up in
                    designing beautiful websites for their clients to work on
                    developing their own. It’s understandable, but you have to
                    tell yourself what you tell your clients: your site is often
                    your first chance to make a good impression on potential
                    customers. A digital agency’s website is just as much their
                    “storefront” as any site they craft for their clients.
                  </p>
                  <h6>Martin Dohn</h6>
                  <p>Web Developer</p>
                </div>
              </div>
              <div>
                <div className="single__testimonial">
                  <p>
                    All too often, digital agencies get too wrapped up in
                    designing beautiful websites for their clients to work on
                    developing their own. It’s understandable, but you have to
                    tell yourself what you tell your clients: your site is often
                    your first chance to make a good impression on potential
                    customers. A digital agency’s website is just as much their
                    “storefront” as any site they craft for their clients.
                  </p>
                  <h6>Martin Dohn</h6>
                  <p>Web Developer</p>
                </div>
              </div>
              <div>
                <div className="single__testimonial">
                  <p>
                    All too often, digital agencies get too wrapped up in
                    designing beautiful websites for their clients to work on
                    developing their own. It’s understandable, but you have to
                    tell yourself what you tell your clients: your site is often
                    your first chance to make a good impression on potential
                    customers. A digital agency’s website is just as much their
                    “storefront” as any site they craft for their clients.
                  </p>
                  <h6>Martin Dohn</h6>
                  <p>Web Developer</p>
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
