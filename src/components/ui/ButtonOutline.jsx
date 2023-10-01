import React from "react";
import classes from "./ButtonOutline.module.scss";

export function ButtonOutline(props) {
  return (
    <button
      className={`${classes["btn"]} ${classes["btn__outline"]}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export function ButtonPrimary(props) {
  return (
    <button
      className={`${classes["btn"]} ${classes["btn__primary"]}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
