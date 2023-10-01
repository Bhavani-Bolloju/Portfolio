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

const Item = function ({ title, text }) {
  return (
    <li className={classes.item}>
      <h4 className={classes.title}>{title}</h4>
      <p className={classes.text}>{text}</p>
    </li>
  );
};

function OuranosProjectDetail() {
  useEffect(() => {
    scroll.scrollToTop();
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
          <li className={classes.li}>
            <p className={classes.content}>
              Developed the
              <span className={classes.highlight}>
                {" "}
                e-commerce functionality{" "}
              </span>
              that enables seamless online shopping . Users can effortlessly
              browse products, add items to their cart, and securely complete
              purchases with just a few clicks
            </p>
          </li>
          <li className={classes.li}>
            <p className={classes.content}>
              Implemented a
              <span className={classes.highlight}> blog section </span> that
              offers valuable insights and timely updates. I incorporated
              exclusive
              <span className={classes.highlight}> admin rights </span>, where
              administrators have special rights to add and manage blog content
            </p>
          </li>
          <li className={classes.li}>
            <p className={classes.content}>
              Each blog post has its dedicated page for a deeper dive. Users can
              actively engage with likes and comments.
            </p>
          </li>
          <li className={classes.li}>
            <p className={classes.content}>
              Integrated{" "}
              <span className={classes.highlight}> user authentication </span>
              using Firebase, ensuring a secure environment. Users must log in
              to place orders, add items to their cart, or engage with blog
              posts, such as liking them.
            </p>
          </li>
        </ul>
      </div>
      <div className={classes.goals}>
        <HeadingTertiary>Project Goals and Objectives:</HeadingTertiary>
        <ul className={classes.list}>
          <li className={classes.li}>
            <p className={classes.content}>
              Develop a{" "}
              <span className={classes.highlight}>
                {" "}
                fully responsive website{" "}
              </span>{" "}
              to ensure optimal user experience across various devices and
              screen sizes.
            </p>
          </li>
          <li className={classes.li}>
            <p className={classes.content}>
              Create an intuitive and visually appealing{" "}
              <span className={classes.highlight}> e-commerce platform </span>
              with smooth product browsing, cart management, and secure
              payments.
            </p>
          </li>
          <li className={classes.li}>
            <p className={classes.content}>
              Create an{" "}
              <span className={classes.highlight}>
                admin-friendly dashboard{" "}
              </span>{" "}
              interface for efficient content management, focusing on the user
              experience of administrators responsible for adding and editing
              blog content.
            </p>
          </li>

          <li className={classes.li}>
            <p className={classes.content}>
              <span className={classes.highlight}>
                Optimize front-end code{" "}
              </span>{" "}
              and assets for faster page loading and a seamless browsing
              experience.
            </p>
          </li>
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
          <li className={classes.li}>
            <p className={classes.content}>
              Create responsive and accessible user interfaces from design
              mockups.
            </p>
          </li>
          <li className={classes.li}>
            <p className={classes.content}>
              Use Git for version control and collaboration with a structured
              commit history.
            </p>
          </li>
          <li className={classes.li}>
            <p className={classes.content}>
              Implement secure authentication systems for user data protection
              and exclusive features.
            </p>
          </li>
          <li className={classes.li}>
            <p className={classes.content}>
              Ensure seamless functionality across various web browsers through
              extensive testing.
            </p>
          </li>
          <li className={classes.li}>
            <p className={classes.content}>
              Optimize load times and improve overall site performance.
            </p>
          </li>
          <li className={classes.li}>
            <p className={classes.content}>
              Utilize modern frameworks and libraries for streamlined
              development and enhanced user interactions.
            </p>
          </li>
          <li className={classes.li}>
            <p className={classes.content}>
              Provide regular project updates, address enhancements, and
              promptly resolve issues.
            </p>
          </li>
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
            <li className={classes.li}>
              <p className={classes.content}>
                Ensuring that the flower pot and hand moved perfectly in sync
                was quite a challenge. I needed to carefully align their
                positions and movements to maintain perfect synchrony.
              </p>
            </li>
            <li className={classes.li}>
              <p className={classes.content}>
                I opted to use only CSS for the animation without relying on
                external libraries. Implementing transitions for both the pot
                and the hand individually while keeping them in sync required
                careful planning and precise CSS adjustments.
              </p>
            </li>
            <li className={classes.li}>
              <p className={classes.content}>
                To bring this complex animation to life, I leveraged CSS
                keyframes. Keyframes allowed me to define specific animation
                sequences and timings, enhancing the visual appeal and
                smoothness of the animation.
              </p>
            </li>
            <li className={classes.li}>
              <p className={classes.content}>
                Adapting the animation for small screens presented an extra
                challenge. I modified sizes and animation settings to ensure a
                consistent and visually pleasing experience on various screen
                sizes.
              </p>
            </li>
            <li className={classes.li}>
              <p className={classes.content}>
                You can view the synchronized flower pot animation in action in
                the "Why Choose Us" section -
                <a href="https://orpl---finalproject.web.app/" target="_blank">
                  here
                </a>
              </p>
            </li>
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
            <li className={classes.li}>
              <p className={classes.content}>
                The challenge was to establish a clear system for representing
                two product versions, "Lite" and "Pro," and efficiently manage
                their associated plans.
              </p>
            </li>
            <li className={classes.li}>
              <p className={classes.content}>
                Ensuring that users could easily select their desired product
                version and plan while receiving accurate pricing and feature
                information was crucial.
              </p>
            </li>
            <li className={classes.li}>
              <p className={classes.content}>
                I structured the database to associate each product version with
                its corresponding plans.
              </p>
            </li>
            <li className={classes.li}>
              <p className={classes.content}>
                I designed an user interface that guided users through the
                product selection process. When a user selected the "Pro"
                version, the interface dynamically presented the two available
                plans, each with its unique features and pricing details. This
                ensured that users could make informed decisions based on their
                specific needs.
              </p>
            </li>
            <li>
              <div className={classes.productsImage}>
                <img src={products} alt="" />
              </div>
            </li>
            <li className={classes.li}>
              <p className={classes.content}>
                You can experience the dynamic product selection process in
                action on the "Products" page -
                <a
                  href="https://orpl---finalproject.web.app/products"
                  target="_blank"
                >
                  here
                </a>
              </p>
            </li>
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
            <li className={classes.li}>
              <p className={classes.content}>
                Handling additions, removals, and updates in the shopping cart
                while providing a smooth and responsive user experience.
              </p>
            </li>
            <li className={classes.li}>
              <p className={classes.content}>
                Keeping the shopping cart data in sync with Firebase to enable
                real-time updates and maintain cart data consistently across
                user sessions.
              </p>
            </li>
            <li className={classes.li}>
              <p className={classes.content}>
                I leveraged the power of React Redux Toolkit, a versatile tool
                for state management, to simplify cart operations and improve
                the user interface's responsiveness.
              </p>
            </li>
            <li className={classes.li}>
              <p className={classes.content}>
                Implemented custom action creators, which seamlessly
                communicated with Firebase. These actions facilitated the
                storage and retrieval of cart data, ensuring that the cart state
                in Redux and Firebase remained perfectly synchronized. This
                synchronization created a consistent shopping experience, making
                it easy for users to interact with their carts.
              </p>
            </li>

            <li>
              <div className={classes.productsImage}>
                <img src={cart} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.btns}>
        <ButtonPrimary>Live Demo</ButtonPrimary>
        <ButtonPrimary>Github</ButtonPrimary>
      </div>
    </section>
  );
}

export default OuranosProjectDetail;
