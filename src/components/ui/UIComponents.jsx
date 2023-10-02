import React from "react";
import classes from "./UIComponents.module.scss";

export function Item(props) {
  return (
    <li className={classes.item}>
      <p className={classes.content}>{props.children}</p>
    </li>
  );
}
