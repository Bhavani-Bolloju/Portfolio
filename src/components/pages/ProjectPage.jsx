import React from "react";
import { Outlet } from "react-router-dom";
import { RxArrowLeft } from "react-icons/rx";
import classes from "./ProjectPage.module.scss";
import { useNavigate } from "react-router-dom";

function ProjectPage() {
  const navigate = useNavigate();

  return (
    <section className={classes["ProjectPage"]}>
      <button
        className={classes["btn__back"]}
        onClick={() => {
          navigate("/");
        }}
      >
        <RxArrowLeft />
      </button>
      <Outlet />
    </section>
  );
}

export default ProjectPage;
