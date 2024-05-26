/* eslint-disable react/prop-types */

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

export function ButtonLink(props) {
  return (
    <a
      {...props}
      className={`${classes.btn} ${classes["btn__link"]}`}
      target="_blank"
    >
      {props.children}
    </a>
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
