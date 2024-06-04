// import React from "react";
import classes from "./About.module.scss";
import SecondaryHeading from "../ui/SecondaryHeading";

function About() {
  return (
    <section className={classes.about} id="about">
      <div className={classes.title}>
        <SecondaryHeading>About me</SecondaryHeading>
      </div>
      <p>
        Driven by a passion for crafting visually appealing and user-friendly
        web experiences, I began my self-taught journey into web development. In
        the early days, I navigated limited online resources, using any app
        available to learn HTML and CSS. Balancing a full-time job, I dedicated
        time each day to refine my skills.
      </p>

      <p>
        The pandemic was a turning point, intensifying my job dissatisfaction
        and motivating me to follow my passion full-time. I quit my job,
        immersed myself in online courses and coding bootcamps, and mastered
        HTML, CSS, JavaScript, and the React.js framework.
      </p>
    </section>
  );
}

export default About;
