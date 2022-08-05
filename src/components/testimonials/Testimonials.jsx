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
                    Şenay leans into colorful, maximalist design with fun
                    elements like hover animations, a rainbow-gradient color
                    scheme, and wacky graphics such as pineapples and dolphins.
                    In a world where clean and minimalist design is often
                    favored, it’s great to see designers who step out of the box
                    and be able to clearly showcase their work while still
                    bringing in their personality and fun.
                  </p>
                  <h6>Maria Maxim</h6>
                  <p>Online shopping owner</p>
                </div>
              </div>
              <div>
                <div className="single__testimonial">
                  <p>
                    Şenay Akagündüz specializes in UI/UX design and game
                    development, and his portfolio is a great showcase of his
                    abilities — and more importantly her personality as a
                    designer.
                  </p>
                  <h6>David Colora</h6>
                  <p>MDB Hotel SEO</p>
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
