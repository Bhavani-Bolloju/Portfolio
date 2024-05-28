/* eslint-disable react/prop-types */
import classes from "./Project.module.scss";
import { ButtonOutline, ButtonLink } from "../../ui/ButtonOutline";
import { useNavigate } from "react-router-dom";

const Project = function ({ image, navLink, title, githubLink }) {
  const navigate = useNavigate();
  return (
    <div className={classes.item}>
      <img src={image} alt={title} />
      <div className={classes.content}>
        <div className={classes["content__container"]}>
          <h4>{title}</h4>
          <div className={classes.btns}>
            <ButtonOutline
              onClick={() => {
                navigate(`/project/${navLink}`);
              }}
            >
              read more
            </ButtonOutline>
            <ButtonLink href={githubLink}>git hub</ButtonLink>
          </div>
        </div>
      </div>
      {/* <div className={classes.line}></div> */}
    </div>
  );
};

export default Project;
