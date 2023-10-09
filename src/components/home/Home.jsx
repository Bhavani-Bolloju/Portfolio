import React from "react";
import classes from "./Home.module.scss";

import { ButtonPrimary } from "../ui/ButtonOutline";

function Home() {
  return (
    <section className={classes.home} id="home">
      <div className={classes["home__content"]}>
        <div className={classes["name"]}>
          <span>Hello, i'm </span>
          <span> Bhavani Bolloju</span>
        </div>

        <p className={classes.intro}>
          A <span className={classes.highlight}> Front-end web developer</span>,
          passionate about creating beautiful and user-friendly website. I'm
          also a fan of anime, love reading books, and can't resist a tasty
          veggie burger. Welcome to my portfolio.
        </p>
        <div className={classes.btns}>
          <ButtonPrimary>Download CV</ButtonPrimary>
          <ButtonPrimary>View My Work</ButtonPrimary>
        </div>
      </div>
      {/* <div className={classes.bar}></div> */}
    </section>
  );
}

export default Home;
