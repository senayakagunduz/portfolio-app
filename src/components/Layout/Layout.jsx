import React, { Fragment } from 'react'
// import Header from "../header/Header"
import Header from "../header/Header.jsx"
import HeroSection from '../hero-section/HeroSection.jsx'
import About from '../about/About.jsx'
import Education from '../about/Education.jsx'

const Layout = () => {
  return <Fragment>
   <Header/>
   <HeroSection/>
   <About/>
  </Fragment>
}

export default Layout