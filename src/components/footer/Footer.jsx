// import React from "react";
import classes from "./Footer.module.scss";
// import { SiSubstack, SiLinkedin, SiGithub } from "react-icons/si";
import SocialLinks from "../ui/SocialLinks";

import { SubtitleHeading } from "../ui/Headings";

function Footer() {
  return (
    <footer className={classes.footer} id="footer">
      <div className={classes["footer__top"]}>
        <div className={classes["footer__intro"]}>
          <div className={classes["footer__intro--title"]}>
            <SubtitleHeading>bhavani bolloju</SubtitleHeading>
          </div>
          <div className={classes["footer__intro--text"]}>
            A front-end developer passionate about crafting beautiful and
            user-friendly web experiences. I thrive on solving complex
            challenges and creating responsive websites that captivate users.
            Reach out to me at{" "}
            <span className={classes.highlight}>Bhavani.Bolloju@gmail.com</span>{" "}
            to get started!
          </div>
        </div>
        <div className={classes["footer__social-links"]}>
          <SubtitleHeading>social</SubtitleHeading>
          <SocialLinks></SocialLinks>
          {/* <div>
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
          </div> */}
        </div>
      </div>
      <div className={classes["footer__bottom"]}>
        <div className={classes["footer__copyrights"]}>
          <span>©Copyright 2023</span>
          <span>All rights reserved</span>
          <span>Designed and Developed by Bhavani Bolloju</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
