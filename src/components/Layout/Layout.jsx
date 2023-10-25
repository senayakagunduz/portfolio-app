import React, { Fragment } from "react";
import Header from "../header/Header.jsx";
import HeroSection from "../hero-section/HeroSection.jsx";
import About from "../about/About.jsx";
import Services from "../services/Services.jsx";
import Experience from "../experience/Experience.jsx";
import Portfolio from "../portfolio/Portfolio.jsx";
import Testimonials from "../testimonials/Testimonials.jsx";
import Contact from "../contact/Contact.jsx";
import Footer from "../footer/Footer.jsx";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Portfolio />
      {/* <About /> */}
      {/* <Services /> */}
      <Experience />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Layout;
