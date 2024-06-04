// import React from "react";
import classes from "./Skills.module.scss";

import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiGithub,
  SiRedux,
  SiWebpack,
  SiNpm,
  SiTailwindcss,
  SiBootstrap
} from "react-icons/si";

import HeadingTertiary from "../ui/HeadingTertiary";

function Skills() {
  return (
    <section className={classes.skills} id="skills">
      <div className={classes["skills__container"]}>
        <HeadingTertiary>My skills</HeadingTertiary>
        <ul className={classes["skills__list"]}>
          <li>
            <SiHtml5 />
            <span className={classes.text}>HTML</span>
          </li>
          <li>
            <SiCss3 />
            <span className={classes.text}>CSS</span>
          </li>
          <li>
            <SiJavascript />
            <span className={classes.text}>Javascript</span>
          </li>
          <li>
            <SiReact />
            <span className={classes.text}>React JS</span>
          </li>
          <li>
            <SiRedux />
            <span className={classes.text}>redux</span>
          </li>
          <li>
            <SiGithub />
            <span className={classes.text}>git and github</span>
          </li>

          <li>
            <SiWebpack />
            <span className={classes.text}>webpack</span>
          </li>
          <li>
            <SiNpm />
            <span className={classes.text}>npm</span>
          </li>
          <li>
            <SiTailwindcss />
            <span className={classes.text}>tailwind</span>
          </li>
          <li>
            <SiBootstrap />
            <span className={classes.text}>bootstrap</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
