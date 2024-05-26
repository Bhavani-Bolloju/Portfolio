/* eslint-disable react/prop-types */

import classes from "./SecondaryHeading.module.scss";

function SecondaryHeading(props) {
  return <h2 className={classes.heading}>{props.children}</h2>;
}

export default SecondaryHeading;
