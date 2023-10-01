import React from "react";
import classes from "./About.module.scss";
import SecondaryHeading from "../ui/SecondaryHeading";

function About() {
  return (
    <section className={classes.about} id="about">
      <div className={classes.title}>
        <SecondaryHeading>About me</SecondaryHeading>
      </div>
      <p>
        A passionate self-taught Front-End Developer with a background in
        finance. Over the past year and a half, I've dedicated myself to
        mastering web development. My journey began with a curiosity for coding
        and a commitment to learning. I now excel in HTML, CSS, JavaScript, and
        React.js, crafting interactive and responsive websites.
      </p>
    </section>
  );
}

export default About;
