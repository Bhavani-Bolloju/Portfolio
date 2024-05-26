import classes from "./Projects.module.scss";
import ORPL from "../../../assets/project/orpl/ORPL_desktop.png";
// import weather1 from "../../../assets/project/weather/weather_LS.png";

import shop from "../../../assets/project/e-commerce/shot-cart_desktop.png";

import littleLemon from "../../../assets/project/little-lemon/Little-Lemon_desktop.png";

import bookSpotLight from "../../../assets/project/bookspotLight/bookspotlight_desktop.png";

import SecondaryHeading from "../../ui/SecondaryHeading";
import Project from "./Project";
// import HeadingTertiary from "../../ui/HeadingTertiary";

// import { FaReact, FaSass, FaFigma } from "react-icons/fa";
// import { IoLogoFirebase } from "react-icons/io5";

// import { ProjectCard, ProjectCardReverse } from "../../ui/ProjectCard";

// eslint-disable-next-line react/prop-types

function Projects() {
  // const navigate = useNavigate();

  return (
    <section className={classes.projects} id="projects">
      <SecondaryHeading>My projects</SecondaryHeading>
      <div className={classes.list}>
        <Project
          image={bookSpotLight}
          navLink="bookSpotLight"
          title="01. BookSpotLight"
          githubLink="https://github.com/Bhavani-Bolloju/bookSpotLight"
        />
        <Project
          image={ORPL}
          navLink="ouranos"
          title="02. oranous robotics"
          githubLink="https://github.com/Bhavani-Bolloju/Ouranos-Project-website"
        />
        <Project
          image={littleLemon}
          navLink="littleLemon"
          title="03. little lemon restaurant"
          githubLink="https://github.com/Bhavani-Bolloju/little-lemon-restaurant"
        />
        <Project
          image={shop}
          navLink="shopCart"
          title="04. Shop Cart"
          githubLink="https://github.com/Bhavani-Bolloju/E-commerce"
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
