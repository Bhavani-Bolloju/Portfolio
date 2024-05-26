// import React from "react";
import classes from "./BlogsPage.module.scss";
// import HeadingTertiary from "../ui/HeadingTertiary";
import logo from "../../assets/home/logo.svg";
import SocialLinks from "../ui/SocialLinks";
import { SubtitleHeading } from "../ui/Headings";

function BlogsPage() {
  return (
    <section className={classes["blogsPage"]}>
      <div className={classes["blogsPage__header"]}>
        <img src={logo} alt="" />
        <SubtitleHeading>Blogs</SubtitleHeading>
        <SocialLinks />
      </div>
    </section>
  );
}

export default BlogsPage;
