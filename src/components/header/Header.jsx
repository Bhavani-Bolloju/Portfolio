import React, { useState, useEffect } from "react";
import classes from "./Header.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/home/Full-logo.svg";

import { SiSubstack, SiLinkedin, SiGithub } from "react-icons/si";

import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const [navDropdown, setNavDropdown] = useState(false);

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

  const handleNavDropdown = function () {
    setNavDropdown((prev) => !prev);
  };

  return (
    <header
      className={`${classes.header} ${
        (showHeader || navDropdown) && classes.scroll
      }`}
    >
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

      <button
        className={`${classes["nav__dropdown--btns"]} ${
          navDropdown && classes.active
        }`}
        onClick={handleNavDropdown}
      >
        <RxHamburgerMenu className={classes["nav__dropdown--open"]} />
        <MdOutlineClose className={classes["nav__dropdown--close"]} />
      </button>
      <ul
        className={`${classes["nav__dropdown--options"]} ${
          navDropdown && classes["nav__dropdown--active"]
        }`}
      >
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
          className={classes.link}
        >
          Projects
        </Link>

        <Link
          activeClass={classes["active"]}
          to="footer"
          spy={true}
          smooth={true}
          offset={-500}
          duration={700}
        >
          Footer
        </Link>
      </ul>
    </header>
  );
}

export default Header;
