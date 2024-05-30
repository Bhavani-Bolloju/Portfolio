import classes from "./Home.module.scss";

import { ButtonLink } from "../ui/ButtonOutline";

import resume from "../../assets/home/Bhavani-Bolloju-CV.pdf";

import { Link } from "react-scroll";
import SocialLinks from "../ui/SocialLinks";

// import Logo from "../../assets/home/design.svg";

function Home() {
  return (
    <>
      <section className={classes.home} id="home">
        <div className={classes["home__content"]}>
          <h1 className={classes["profile__name"]}>
            <p className={classes.hello}>Hello !👋 </p>
            <p>I am Bhavani</p>
          </h1>

          <p className={classes.intro}>
            <span className={classes.highlight}>A Front-end web developer</span>
            , Welcome to my portfolio
            <span className={classes.highlight}>🙂</span>
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
        <div className={classes.bar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            fill="none"
            viewBox="0 0 200 200"
            version="1.1"
          >
            <path
              fill='url("#SvgjsLinearGradient1118")'
              fillRule="evenodd"
              d="M107.143 0H92.857v82.756L34.34 24.239 24.24 34.34l58.517 58.517H0v14.286h82.755L24.24 165.66l10.101 10.101 58.517-58.517V200h14.286v-82.756l58.517 58.517 10.101-10.101-58.517-58.517H200V92.857h-82.756l58.517-58.517-10.101-10.102-58.517 58.517V0Z"
              clipRule="evenodd"
            ></path>
            <defs>
              <linearGradient
                gradientTransform="rotate(0 0.5 0.5)"
                id="SvgjsLinearGradient1118"
              ></linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
}

export default Home;
