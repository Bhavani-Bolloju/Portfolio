import React from "react";
import classes from "./Headings.module.scss";

export function SubtitleHeading(props) {
  return <h4 className={classes.subTitle}>{props.children}</h4>;
}
export function SupportingHeading(props) {
  return <h5 className={classes.supportingHeading}>{props.children}</h5>;
}
