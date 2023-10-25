import React from "react";
import "./header.css";

import whatsapp from "../../assets/whatsapp-img.png"
import logo_bird from "../../assets/bird_trans.png"

const navLinks = [
  {
    id: 1,
    display: "Home",
    url: "#home",

  },
  // {
  //   id: 2,
  //   display: "About",
  //   url: "#about",
  // },
  // {
  //   id: 3,
  //   display: "Services",
  //   url: "#services",
  // },
  {
    id: 4,
    display: "Projects",
    url: "#portfolio",
  },
  {
    id: 5,
    display: "Contact",
    url: "#contact",
  },
];

const Header = () => {
  return (
  
    <nav className="navbar navbar-expand-lg fixed-top"> 
    <div className="container-fluid">
      <div className="navbar-brand logo">
              <img src={logo_bird} alt=""/>
              <h3>Reach Your Dreams</h3>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav ms-auto gap-4 px-5">
        {
          navLinks.map((link) => {
            const { display, id, url } = link;
            return (
              <li className="nav-item" key={id}>
                <a className="nav-link active" href={url} rel="noreferrer">{display}</a>
              </li>
            )
          })
        }
      </ul>
    </div>
    </div>
    </nav>
  )
}
export default Header;

       {/* <div className="whatsapp">
        <img src={whatsapp} style={{width:"50px"}}/>
      </div> */}
