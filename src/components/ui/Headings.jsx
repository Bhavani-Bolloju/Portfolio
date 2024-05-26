/* eslint-disable react/prop-types */

import classes from "./Headings.module.scss";

export function SubtitleHeading(props) {
  return <h4 className={classes.subTitle}>{props.children}</h4>;
}
export function SupportingHeading(props) {
  return <h5 className={classes.supportingHeading}>{props.children}</h5>;
}
export function SupportingSubHeading(props) {
  return <h5 className={classes.supportingSubHeading}>{props.children}</h5>;
}
