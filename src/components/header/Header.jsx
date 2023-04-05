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
  {
    id: 2,
    display: "About",
    url: "#about",
  },
  {
    id: 3,
    display: "Services",
    url: "#services",
  },
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
  <header>
      <nav className="nav-bar">
          <div className="logo">
              <img src={logo_bird} alt=""/>
              <h3>Reach Your Dreams</h3>
          </div>
         
              <ul>
        {
          navLinks.map((link) => {
            const { display, id, url } = link;
            return (
              <li key={id}>
                <a href={url} rel="noreferrer">{display}</a>
              </li>
            )
          })
        }
              </ul>
      </nav>
      {/* <div className="whatsapp">
        <img src={whatsapp} style={{width:"50px"}}/>
      </div> */}
  </header>
  
  )
}
export default Header;
