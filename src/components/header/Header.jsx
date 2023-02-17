import React from "react";
import "./header.css";

const navLinks = [
  {
    id:1,
    display: "Home",
    url: "#home",
    
  },
  {
    id:2,
    display: "About",
    url: "#about",
  },
  {
    id:3,
    display: "Services",
    url: "#services",
  },
  {
    id:4,
    display: "Portfolio",
    url: "#portfolio",
  },
  {
    id:5,
    display: "Contact",
    url: "#contact",
  },
];

const Header = () => {
  return (

    <nav className="navbar navbar-expand-lg  ml-2 mr-2 " style={{ backgroundColor: "#7865FF" }}>
      <div className="container">
        <a className="navbar-brand brand" href="/#">Şenay</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-around nav__menu" id="navbarSupportedContent">
          <ul className="navbar-nav nav__list ">
            {
              navLinks.map((link) => {
                const { display, url,id } = link;
                return (
                  <li key={id} className="nav-item links ">
                    <a className="nav-link  brand" rel="noreferrer" href={url}>{display}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>

    </nav>


  );
};

export default Header;
