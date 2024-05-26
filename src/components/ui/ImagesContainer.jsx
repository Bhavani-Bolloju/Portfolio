/* eslint-disable react/prop-types */
// import React from "react";
import classes from "./ImagesContainer.module.scss";

function ImagesContainer(props) {
  return (
    <div className={classes.images}>
      <div className={classes.image1}>
        <img src={props.image1} alt="desktop view" width={500} height={400} />
      </div>
      <div className={classes.image2}>
        <img src={props.image2} alt="mobile view" width={200} height={500} />
      </div>
    </div>
  );
}

export default ImagesContainer;
