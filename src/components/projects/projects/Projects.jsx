import classes from "./Projects.module.scss";
import ORPL from "../../../assets/project/orpl/ORPL_LS.png";
// import weather1 from "../../../assets/project/weather/weather_LS.png";

import shop from "../../../assets/project/e-commerce/shop-cart_LS.png";

import littleLemon from "../../../assets/project/little-lemon/little-lemon_LS.png";

import bookSpotLight from "../../../assets/project/bookspotLight/bookspotlight.png";

import SecondaryHeading from "../../ui/SecondaryHeading";
// import HeadingTertiary from "../../ui/HeadingTertiary";

import { useNavigate } from "react-router-dom";

// import { FaReact, FaSass, FaFigma } from "react-icons/fa";
// import { IoLogoFirebase } from "react-icons/io5";

// import { ProjectCard, ProjectCardReverse } from "../../ui/ProjectCard";

import { ButtonOutline, ButtonLink } from "../../ui/ButtonOutline";

// eslint-disable-next-line react/prop-types
const Project = function ({ image, navLink, title, githubLink }) {
  const navigate = useNavigate();
  return (
    <div className={classes.item}>
      <img src={image} alt={title} />
      <div className={classes.content}>
        <div className={classes["content__container"]}>
          <h4>{title}</h4>
          <div className={classes.btns}>
            <ButtonOutline
              onClick={() => {
                navigate(`/project/${navLink}`);
              }}
            >
              read more
            </ButtonOutline>
            <ButtonLink href={githubLink}>git hub</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

function Projects() {
  // const navigate = useNavigate();

  return (
    <section className={classes.projects} id="projects">
      <SecondaryHeading>My projects</SecondaryHeading>
      <div className={classes.list}>
        <Project
          image={ORPL}
          navLink="ouranos"
          title="01. oranous robotics"
          githubLink="https://github.com/Bhavani-Bolloju/Ouranos-Project-website"
        />
        <Project
          image={littleLemon}
          navLink="littleLemon"
          title="02. little lemon restaurant"
          githubLink="https://github.com/Bhavani-Bolloju/little-lemon-restaurant"
        />
        <Project
          image={shop}
          navLink="shopCart"
          title="03. Shop Cart"
          githubLink="https://github.com/Bhavani-Bolloju/E-commerce"
        />
        <Project
          image={bookSpotLight}
          navLink="bookSpotLight"
          title="04. BookSpotLight"
          githubLink="https://github.com/Bhavani-Bolloju/bookSpotLight"
        />
        {/* <Project
          image={weather1}
          navLink="weather"
          title="04. Daily Weather"
          githubLink="https://github.com/Bhavani-Bolloju/Weather-App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
