import React from "react";
import classes from "./SocialLinks.module.scss";
import { SiSubstack, SiLinkedin, SiGithub } from "react-icons/si";

function SocialLinks() {
  return (
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
  );
}

export default SocialLinks;
