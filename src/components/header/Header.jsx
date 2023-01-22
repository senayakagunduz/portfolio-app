import React from "react";
import { Container } from "reactstrap";
import "./header.css";
import ReactWhatsapp from "react-whatsapp";

const navLinks = [
  {
    display: "Home",
    url: "#home",
  },
  {
    display: "About",
    url: "#about",
  },
  {
    display: "Services",
    url: "#services",
  },
  {
    display: "Portfolio",
    url: "#portfolio",
  },
  {
    display: "Contact",
    url: "#contact",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between sticky-top">
          <div className="logo">
            <h5>Şenay</h5>
          </div>
          <div className="nav__menu">
            <ul className="nav__list">
              {navLinks.map((item, index) => (
                <li className="nav__item" key={index}>
                  <a href={item.url} rel="noreferrer" >{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav__right d-flex align-items-center gap-4">
            <ReactWhatsapp
              number="+90-539-663-7014"
              message="Hello World!!!"
              target="_blank"
              style={{ background: "#0E1B31", border: "none" }}
            >
              <button className="btn"> Let's Talk</button>
            </ReactWhatsapp>

            <span className="mobile__menu">
              <i className="ri-menu-5-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
