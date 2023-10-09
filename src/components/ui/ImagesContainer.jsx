import React from "react";
import classes from "./ImagesContainer.module.scss";

function ImagesContainer(props) {
  return (
    <div className={classes.images}>
      <div className={classes.image1}>
        <img src={props.image1} alt="" />
      </div>
      <div className={classes.image2}>
        <img src={props.image2} alt="" />
      </div>
    </div>
  );
}

export default ImagesContainer;
