import React, { useEffect } from "react";
import classes from "./OuranosProjectDetail.module.scss";
import { animateScroll as scroll } from "react-scroll";

import SecondaryHeading from "../../ui/SecondaryHeading";
import HeadingTertiary from "../../ui/HeadingTertiary";
import { SubtitleHeading } from "../../ui/Headings";
import { SupportingHeading } from "../../ui/Headings";

import image1 from "../../../assets/project/orpl/ORPL_LS.png";
import image2 from "../../../assets/project/orpl/ORPL_SS.png";

import { FaReact, FaSass, FaGithub } from "react-icons/fa";
import { BiLogoFirebase, BiLogoRedux } from "react-icons/bi";
import { AiOutlineAntDesign } from "react-icons/ai";
import { PiFramerLogoFill } from "react-icons/pi";
import { TbBrandVscode } from "react-icons/tb";

import products from "../../../assets/project/orpl/ORPL_products-page.png";

import cart from "../../../assets/project/orpl/cart.png";

import { ButtonPrimary } from "../../ui/ButtonOutline";

import { Item } from "../../ui/UIComponents";

import productList from "../../../assets/project/orpl/ProductList.png";
import adminPage from "../../../assets/project/orpl/adminPage.png";
import blog1 from "../../../assets/project/orpl/blog_1.png";
import blog2 from "../../../assets/project/orpl/blog_2.png";
import detailPage1 from "../../../assets/project/orpl/userInteraction1.png";
import detailPage2 from "../../../assets/project/orpl/userInteraction2.png";
import { ButtonLink } from "../../ui/ButtonOutline";

function OuranosProjectDetail() {
  useEffect(() => {
    // scroll.scrollToTop();
  }, []);
  return (
    <section className={classes.project}>
      <SecondaryHeading>Ouranos robotics</SecondaryHeading>
      <div className={classes.images}>
        <img src={image1} alt="" className={classes.image1} />
        <img src={image2} alt="" className={classes.image2} />
      </div>
      <div className={classes["project__overview"]}>
        <HeadingTertiary>Project overview</HeadingTertiary>
        <ul className={classes.list}>
          <Item>
            Developed the
            <span className={classes.highlight}>
              {" "}
              e-commerce functionality{" "}
            </span>
            that enables seamless online shopping . Users can effortlessly
            browse products, add items to their cart, and securely complete
            purchases with just a few clicks.
          </Item>

          <Item>
            Implemented a
            <span className={classes.highlight}> blog section </span> that
            offers valuable insights. I incorporated exclusive
            <span className={classes.highlight}> admin rights </span>, where
            administrators have special rights to add and manage blog content.
          </Item>

          <Item>
            Each blog post has its dedicated page for a deeper dive. Users can
            actively engage with likes and comments.
          </Item>

          <Item>
            Integrated{" "}
            <span className={classes.highlight}> user authentication </span>
            using Firebase, ensuring a secure environment. Users must log in to
            place orders, add items to their cart, or engage with blog posts,
            such as liking them.
          </Item>
        </ul>
      </div>
      <div className={classes.goals}>
        <HeadingTertiary>Project Goals and Objectives:</HeadingTertiary>
        <ul className={classes.list}>
          <Item>
            Developed a{" "}
            <span className={classes.highlight}>
              {" "}
              fully responsive website{" "}
            </span>{" "}
            to ensure optimal user experience across various devices and screen
            sizes.
          </Item>

          <Item>
            Create an intuitive and visually appealing{" "}
            <span className={classes.highlight}> e-commerce platform </span>
            with smooth product browsing, cart management, and secure payments.
          </Item>

          <Item>
            Create an{" "}
            <span className={classes.highlight}>admin-friendly dashboard </span>{" "}
            interface for efficient content management, focusing on the user
            experience of administrators responsible for adding and editing blog
            content.
          </Item>

          <Item>
            <span className={classes.highlight}>Optimize front-end code </span>{" "}
            and assets for faster page loading and a seamless browsing
            experience.
          </Item>
        </ul>
      </div>
      <div className={classes.technology}>
        <HeadingTertiary>Technologies Used:</HeadingTertiary>
        <ul>
          <li>
            <FaReact></FaReact>
            <span>React</span>
          </li>
          <li>
            <BiLogoRedux />
            <span>Redux</span>
          </li>
          <li>
            <FaSass></FaSass>
            <span>Sass</span>
          </li>
          <li>
            <AiOutlineAntDesign />
            <span>AntD</span>
          </li>
          <li>
            <BiLogoFirebase />
            <span>Firebase</span>
          </li>
          <li>
            <FaGithub />
            <span>Github</span>
          </li>
          <li>
            <PiFramerLogoFill />
            <span>Framer motion</span>
          </li>
          <li>
            <TbBrandVscode />
            <span>Vs</span>
          </li>
        </ul>
      </div>
      <div className={classes.roles}>
        <HeadingTertiary>Role and Responsibilities:</HeadingTertiary>
        <ul>
          <Item>
            Create responsive and accessible user interfaces from design
            mockups.
          </Item>
          <Item>
            Use Git for version control and collaboration with a structured
            commit history.
          </Item>

          <Item>
            Implement secure authentication systems for user data protection and
            exclusive features.
          </Item>
          {/* 
          <Item>
            Ensure seamless functionality across various web browsers through
            extensive testing.
          </Item> */}

          {/* <Item>Optimize load times and improve overall site performance.</Item> */}

          <Item>
            Utilize modern frameworks and libraries for streamlined development
            and enhanced user interactions.
          </Item>

          <Item>
            Provide regular project updates, address enhancements, and promptly
            resolve issues.
          </Item>
        </ul>
      </div>
      <div className={classes.challenges}>
        <HeadingTertiary>Challenges Faced:</HeadingTertiary>
        <div className={classes.challenge__item}>
          <SubtitleHeading>
            01. Synchronized Flower Pot Animation
          </SubtitleHeading>
          <SupportingHeading>Description:</SupportingHeading>
          <p className={classes.description}>
            I faced the challenge of creating a synchronized animation featuring
            a flower pot and a hand. The goal was to maintain perfect
            synchronization during the pot's toss, catch, and looping motion.
            Implemented solely with CSS keyframes, the animation was also
            optimized for small screens.
          </p>

          <SupportingHeading>Challenges faced and solution:</SupportingHeading>

          <ul className={classes["challenge__solution"]}>
            <Item>
              Ensuring that the flower pot and hand moved perfectly in sync was
              quite a challenge. I needed to carefully align their positions and
              movements to maintain perfect synchrony.
            </Item>

            <Item>
              I opted to use only CSS for the animation without relying on
              external libraries. Implementing transitions for both the pot and
              the hand individually while keeping them in sync required careful
              planning and precise CSS adjustments.
            </Item>

            <Item>
              To bring this complex animation to life, I leveraged CSS
              keyframes. Keyframes allowed me to define specific animation
              sequences and timings, enhancing the visual appeal and smoothness
              of the animation.
            </Item>

            <Item>
              Adapting the animation for small screens presented an extra
              challenge. I modified sizes and animation settings to ensure a
              consistent and visually pleasing experience on various screen
              sizes.
            </Item>

            <Item>
              You can view the synchronized flower pot animation in action in
              the "Why Choose Us" section -
              <a href="https://orpl---finalproject.web.app/" target="_blank">
                here
              </a>
            </Item>
          </ul>
        </div>
        <div className={classes.challenge__item}>
          <SubtitleHeading>02. Dynamic Product Selection</SubtitleHeading>
          <SupportingHeading>Description:</SupportingHeading>
          <p>
            During development i faced key challenge in managing product
            versions and plans. We had two versions, 'Lite' and 'Pro,' each with
            unique pricing and features. While 'Lite' was straightforward, 'Pro'
            demanded dynamic presentation of two distinct plans, each with its
            own pricing and features based on user selection.
          </p>

          <SupportingHeading>Challenges faced and solution:</SupportingHeading>

          <ul className={classes["challenge__solution"]}>
            <Item>
              The challenge was to establish a clear system for representing two
              product versions, "Lite" and "Pro," and efficiently manage their
              associated plans.
            </Item>

            <Item>
              Ensuring that users could easily select their desired product
              version and plan while receiving accurate pricing and feature
              information was crucial.
            </Item>

            <Item>
              I structured the database to associate each product version with
              its corresponding plans.
            </Item>

            <Item>
              I designed an user interface that guided users through the product
              selection process. When a user selected the "Pro" version, the
              interface dynamically presented the two available plans, each with
              its unique features and pricing details. This ensured that users
              could make informed decisions based on their specific needs.
            </Item>

            <div className={classes.productsImage}>
              <img src={products} alt="" />
            </div>

            <Item>
              You can experience the dynamic product selection process in action
              on the "Products" page -
              <a
                href="https://orpl---finalproject.web.app/products"
                target="_blank"
              >
                here
              </a>
            </Item>
          </ul>
        </div>
        <div className={classes.challenge__item}>
          <SubtitleHeading>03. Shopping Cart Management</SubtitleHeading>
          <SupportingHeading>Description:</SupportingHeading>
          <p>
            I faced a challenge in managing the shopping cart to ensure it
            always stayed up-to-date with the data stored in Firebase.
          </p>

          <SupportingHeading>Challenges faced and solution:</SupportingHeading>

          <ul className={classes["challenge__solution"]}>
            <Item>
              Handling additions, removals, and updates in the shopping cart
              while providing a smooth and responsive user experience.
            </Item>

            <Item>
              Keeping the shopping cart data in sync with Firebase to enable
              real-time updates and maintain cart data consistently across user
              sessions.
            </Item>

            <Item>
              I leveraged the power of React Redux Toolkit, a versatile tool for
              state management, to simplify cart operations and improve the user
              interface's responsiveness.
            </Item>

            <Item>
              Implemented custom action creators, which seamlessly communicated
              with Firebase. These actions facilitated the storage and retrieval
              of cart data, ensuring that the cart state in Redux and Firebase
              remained perfectly synchronized. This synchronization created a
              consistent shopping experience, making it easy for users to
              interact with their carts.
            </Item>

            <div className={classes.productsImage}>
              <img src={cart} alt="" />
            </div>
          </ul>
        </div>
      </div>
      <div className={classes["project__keyFeatures"]}>
        <HeadingTertiary>Key Features</HeadingTertiary>
        <ul className={classes.list}>
          <Item>
            <span className={classes.highlight}> E-Commerce: </span> Website
            incorporates an e-commerce functionality that allows users to browse
            and purchase products from the company's catalog with shopping cart
            functionality.
          </Item>
          <div className={classes.featuresImage}>
            <img src={productList} alt="" />
          </div>

          <Item>
            <span className={classes.highlight}> Order Placement: </span>
            Users can easily place orders for products they intend to purchase
          </Item>

          <Item>
            <span className={classes.highlight}>Admin Privileges: </span>
            Special admin privileges were implemented to manage the website's
            blog content.
          </Item>

          <div className={classes.featuresImage}>
            <img src={adminPage} alt="" />
          </div>
          <Item>
            <span className={classes.highlight}>Blog Section: </span>A dedicated
            blog section offers a platform for content creation and company
            announcements, contributing to an enhanced user experience.
          </Item>
          <div className={classes.featuresImage}>
            <img src={blog1} alt="" />
            <img src={blog2} alt="" />
          </div>
          <Item>
            <span className={classes.highlight}>User Interaction: </span>
            Engage users with likes and comments on blog posts.
          </Item>

          <div className={classes.featuresImage}>
            <img src={detailPage1} alt="" />
            <img src={detailPage2} alt="" />
          </div>
        </ul>
      </div>
      <div className={classes.btns}>
        <ButtonLink link="https://orpl---finalproject.web.app/">
          Live Demo
        </ButtonLink>
        <ButtonLink link="https://github.com/Bhavani-Bolloju/Ouranos-Project-website">
          Github
        </ButtonLink>
      </div>
    </section>
  );
}

export default OuranosProjectDetail;
