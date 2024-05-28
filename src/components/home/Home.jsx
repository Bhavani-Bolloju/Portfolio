import classes from "./Home.module.scss";

import { ButtonLink } from "../ui/ButtonOutline";

import resume from "../../assets/home/Bhavani-Bolloju-Resume.pdf";

import { Link } from "react-scroll";
import SocialLinks from "../ui/SocialLinks";

function Home() {
  return (
    <section className={classes.home} id="home">
      <div className={classes["home__content"]}>
        <div className={classes["profile__name"]}>
          <p>Hello !👋 </p>
          <p>I am Bhavani</p>
        </div>

        <p className={classes.intro}>
          <span className={classes.highlight}>A Front-end web developer</span>,
          Welcome to my portfolio<span className={classes.highlight}>🙂</span>
          <br />
        </p>

        <SocialLinks></SocialLinks>

        <div className={classes.btns}>
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
          <ButtonLink href={resume} download="Bhavani-CV.pdf">
            Download CV
          </ButtonLink>
        </div>
      </div>

      {/* <div className={classes.bar}></div> */}
    </section>
  );
}

export default Home;
