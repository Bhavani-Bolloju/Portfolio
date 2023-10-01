import React from "react";
import classes from "./Projects.module.scss";
import image1 from "../../../assets/project/orpl/ORPL_LS.png";
import weather1 from "../../../assets/project/weather/weather_LS.png";

import orpl from "../../../assets/project/orpl/ORPL_mockup1.png";

import SecondaryHeading from "../../ui/SecondaryHeading";
import HeadingTertiary from "../../ui/HeadingTertiary";

import { useNavigate } from "react-router-dom";

import { FaReact, FaSass } from "react-icons/fa";

import { ProjectCard, ProjectCardReverse } from "../../ui/ProjectCard";

import { ButtonOutline } from "../../ui/ButtonOutline";

function Projects() {
  const navigate = useNavigate();

  return (
    <section className={classes.projects} id="projects">
      <SecondaryHeading>My projects</SecondaryHeading>
      <div className={classes["projects__container"]}>
        <div className={classes["project"]}>
          <ProjectCard>
            <div className={classes["project__image"]}>
              <img src={image1} alt="" />
            </div>
            <div className={classes["project__content"]}>
              <HeadingTertiary className={classes["project__title"]}>
                01. oranous robotics
              </HeadingTertiary>
              <p className={classes["project__text"]}>
                A fully responsive company website that seamlessly integrates
                e-commerce features with an interactive blog section. The
                platform includes secure integrated payment processing,
                specialized admin controls for effortless blog management, and
                user-friendly comment functionality.
              </p>
              <div className={classes["project__stack"]}>
                <FaReact></FaReact>
                <FaSass></FaSass>
              </div>
              <div className={classes.btns}>
                <ButtonOutline
                  onClick={() => {
                    navigate("/project/ouranos");
                  }}
                >
                  read more
                </ButtonOutline>
                <ButtonOutline>git hub</ButtonOutline>
              </div>
            </div>
          </ProjectCard>
        </div>
        <div className={classes["project"]}>
          <ProjectCard>
            <div className={classes["project__content"]}>
              <HeadingTertiary className={classes["project__title"]}>
                02. Daily Weather
              </HeadingTertiary>
              <p className={classes["project__text"]}>
                Developed a web app using React.js and Redux to provide
                real-time weather data from open-source APIs. Created an
                intuitive interface for current conditions, hourly, and daily
                forecasts worldwide. Integrated interactive graphs using
                Recharts for visualizing hourly weather changes, enhancing user
                experience.
              </p>
              <div className={classes["project__stack"]}>
                <FaReact></FaReact>
                <FaSass></FaSass>
              </div>
              <div className={classes.btns}>
                <ButtonOutline
                  onClick={() => {
                    navigate("/project/weather");
                  }}
                >
                  read more
                </ButtonOutline>
                <ButtonOutline>git hub</ButtonOutline>
              </div>
            </div>
            <div className={classes["project__image"]}>
              <img src={weather1} alt="" />
            </div>
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}

export default Projects;

{
  /* <div className={classes["image__list"]}>
        <div className={classes["image__item"]}>
          <div className={classes["image__item--container"]}>
            <div className={classes["image__item--content"]}>
              <div className={classes["project__content"]}>
                <p className={classes["project__text"]}>
                  A fully responsive company website that seamlessly integrates
                  e-commerce features with an interactive blog section. The
                  platform includes secure integrated payment processing,
                  specialized admin controls for effortless blog management, and
                  user-friendly comment functionality.
                </p>
                <div className={classes["project__stack"]}>
                  <FaReact></FaReact>
                  <FaSass></FaSass>
                </div>
                <div className={classes.btns}>
                  <ButtonOutline
                    onClick={() => {
                      navigate("/project/ouranos");
                    }}
                  >
                    read more
                  </ButtonOutline>
                  <ButtonOutline>git hub</ButtonOutline>
                </div>
              </div>
            </div>
            <img src={image1} alt="" />
          </div>
          <h3>
            <span>Ouranos Robotics</span>
          </h3>
        </div>
        <div>project 2</div>
      </div> */
}
