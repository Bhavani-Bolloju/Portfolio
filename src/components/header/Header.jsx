import React from "react";
import classes from "./Header.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  return (
    <header className={classes.header}>
      <nav className={classes["nav-items"]}>
        <Link
          activeClass={classes["active"]}
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          Hero
        </Link>
        <Link
          activeClass={classes["active"]}
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          About
        </Link>
        <Link
          activeClass={classes["active"]}
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          skills
        </Link>
        <Link
          activeClass={classes["active"]}
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
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
    </header>
  );
}

export default Header;
