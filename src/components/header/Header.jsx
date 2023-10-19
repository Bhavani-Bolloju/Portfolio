import React, { useState, useEffect } from "react";
import classes from "./Header.module.scss";
import { Link } from "react-scroll";
import logo from "../../assets/home/Full-logo.svg";

import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

import { NavLink } from "react-router-dom";
import SocialLinks from "../ui/SocialLinks";

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
      } `}
    >
      <div className={classes.logo}>
        <img src={logo} alt="" />
      </div>

      <nav
        className={`${classes["nav-items"]} ${
          navDropdown && classes["nav-items__dropdown"]
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
        {/* <NavLink to="/blog">Blog</NavLink> */}
      </nav>

      <SocialLinks></SocialLinks>

      <button
        className={`${classes["nav__dropdown--btns"]} ${
          navDropdown && classes.active
        }`}
        onClick={handleNavDropdown}
      >
        <RxHamburgerMenu className={classes["nav__dropdown--open"]} />
        <MdOutlineClose className={classes["nav__dropdown--close"]} />
      </button>
    </header>
  );
}

export default Header;
