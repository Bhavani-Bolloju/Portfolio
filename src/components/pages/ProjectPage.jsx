import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { RxArrowLeft } from "react-icons/rx";
import classes from "./ProjectPage.module.scss";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
function ProjectPage() {
  const navigate = useNavigate();
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

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
