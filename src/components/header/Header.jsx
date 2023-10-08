import React, { useState, useEffect } from "react";
import classes from "./Header.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/home/Full-logo.svg";

import { SiSubstack, SiLinkedin, SiGithub } from "react-icons/si";

function Header() {
  const [showHeader, setShowHeader] = useState(false);

  const handleScroll = function () {
    const homeSection = document.getElementById("home");

    if (window.scrollY > homeSection.clientHeight) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${classes.header} ${showHeader && classes.scroll}`}>
      <div className={classes.logo}>
        <img src={logo} alt="" />
      </div>

      <nav className={classes["nav-items"]}>
        <Link
          activeClass={classes["active"]}
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={700}
        >
          Hero
        </Link>
        <Link
          activeClass={classes["active"]}
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={700}
        >
          About
        </Link>
        <Link
          activeClass={classes["active"]}
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={700}
        >
          skills
        </Link>
        <Link
          activeClass={classes["active"]}
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={700}
        >
          Project
        </Link>
        <Link
          activeClass={classes["active"]}
          to="footer"
          spy={true}
          smooth={true}
          offset={-500}
          duration={700}
        >
          footer
        </Link>
      </nav>
      <div className={classes["social-link"]}>
        <a href="https://github.com/Bhavani-Bolloju" target="_blank">
          <SiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/bhavani-bolloju-9ba34b241/"
          target="_blank"
        >
          <SiLinkedin />
        </a>
        <a href="https://bhavanibolloju.substack.com/" target="_blank">
          <SiSubstack />
        </a>
      </div>
    </header>
  );
}

export default Header;
