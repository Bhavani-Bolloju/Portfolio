import classes from "./HeadingTertiary.module.scss";

function HeadingTertiary(props) {
  return <h3 className={classes.heading}>{props.children}</h3>;
}

export default HeadingTertiary;
