import React from "react";
// import Ouran from "../projects/OuranosProjectDetail";
// import Ourano
import OuranosProjectDetail from "../projects/ouranos/OuranosProjectDetail";
import { Outlet } from "react-router-dom";

function ProjectPage() {
  return (
    <section className="productsPage">
      <Outlet />
    </section>
  );
}

export default ProjectPage;
