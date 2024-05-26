// import React from "react";
import Header from "../header/Header";
import Home from "../home/Home";
import About from "../about/About";
import Projects from "../projects/projects/Projects";
import Footer from "../footer/Footer";
import Skills from "../skills/Skills";
import Contact from "../contact/Recommendation";

function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
