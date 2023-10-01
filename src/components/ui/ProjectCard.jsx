import React from "react";
import classes from "./ProjectCard.module.scss";

export function ProjectCard(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export function ProjectCardReverse(props) {
  return <div className={classes["card__reverse"]}>{props.children}</div>;
}
