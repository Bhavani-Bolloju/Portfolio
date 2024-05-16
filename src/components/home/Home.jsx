import classes from "./Home.module.scss";

import { ButtonLink } from "../ui/ButtonOutline";

import resume from "../../assets/home/Bhavani-Bolloju-Resume.pdf";

import { Link } from "react-scroll";
import SocialLinks from "../ui/SocialLinks";

function Home() {
  return (
    <section className={classes.home} id="home">
      <div className={classes["home__content"]}>
        <div className={classes["name"]}>
          <span>Hello, i&apos;m </span>
          <span> Bhavani Bolloju</span>
        </div>

        <p className={classes.intro}>
          A <span className={classes.highlight}> Front-end web developer</span>,
          passionate about creating beautiful and user-friendly website.
          <br />
          Welcome to my portfolio.
        </p>

        <SocialLinks></SocialLinks>

        <div className={classes.btns}>
          <ButtonLink href={resume} download="Bhavani-CV.pdf">
            Download CV
          </ButtonLink>
          <Link
            activeClass={classes["active"]}
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
          >
            View my work
          </Link>
        </div>
      </div>

      {/* <div className={classes.bar}></div> */}
    </section>
  );
}

export default Home;
