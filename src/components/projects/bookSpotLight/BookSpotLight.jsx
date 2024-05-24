/* eslint-disable react/no-unescaped-entities */
// import React from "react";
import classes from "./BookSpotLight.module.scss";
import SecondaryHeading from "../../ui/SecondaryHeading";
import ImagesContainer from "../../ui/ImagesContainer";
import image1 from "../../../assets/project/bookspotLight/bookspotlight.png";
import image2 from "../../../assets/project/bookspotLight/bookspotlight_mobile.png";
import HeadingTertiary from "../../ui/HeadingTertiary";
import { Item } from "../../ui/UIComponents";
import { SubtitleHeading, SupportingHeading } from "../../ui/Headings";
import { ButtonLink } from "../../ui/ButtonOutline";

function BookSpotLight() {
  return (
    <section className={classes.project}>
      <SecondaryHeading>little lemon restaurant</SecondaryHeading>
      <ImagesContainer image1={image1} image2={image2}></ImagesContainer>
      <div className={classes["project__overview"]}>
        <HeadingTertiary>Project overview</HeadingTertiary>
        <ul className={classes.list}>
          <Item>
            Developed a dynamic and user-friendly website for 'A Little Lemon'
            restaurant, featuring responsive design and{" "}
            <span className={classes.highlight}>
              table reservation functionality{" "}
            </span>
            .
          </Item>

          <Item>
            Users can effortlessly select their preferred date, with the
            application dynamically{" "}
            <span className={classes.highlight}>
              presenting available timings
            </span>
            .
          </Item>

          <Item>
            Emphasized a simplified reservation process to enhance the overall
            user experience.
          </Item>

          <Item>
            Successfully{" "}
            <span className={classes.highlight}>
              {" "}
              integrated Firebase to manage reservation data{" "}
            </span>{" "}
            in real-time, ensuring accurate and up-to-date availability
            information.
          </Item>
          <Item>
            Prioritized UI/UX principles and utilized Figma to
            <span className={classes.highlight}>
              {" "}
              design an intuitive wireframe and prototype
            </span>
            . This approach ensures a visually appealing reservation process,
            aimed at increasing online sales.
          </Item>
        </ul>
      </div>
      <div className={classes.goals}>
        <HeadingTertiary>Project Goals and Objectives:</HeadingTertiary>
        <ul className={classes.list}>
          <Item>
            <span className="highlight"></span>
            Build a fully responsive and functional booking table, Ensuring
            users can easily access and use the table reservation system across
            various devices,
          </Item>

          <Item>
            <span className="highlight"></span>
            Utilize Figma and UI/UX principles to create a visually appealing
            wireframe and prototype, perform thorough research, develop user
            personas, and create a journey map
          </Item>

          <Item>
            <span className="highlight"></span>
            Open opportunities for additional features in the reservation
            process, like providing seating options, selected preferred date and
            time, number of diners and special occusion.
          </Item>

          <Item>
            Build the app using semantic markup. Optimize the website to meet
            accessibility standards , ensuring an inclusive experience for all
            users.
          </Item>
          <Item>
            Enhance the overall website experience, focusing on speed,
            responsiveness, and functionality to meet user expectations.
          </Item>
          <Item>
            Enhance app functionality through the integration of unit tests and
            Optimize the app using performance tools like Lighthouse.
          </Item>
        </ul>
      </div>
      <div className={classes.technology}>
        <HeadingTertiary>Technologies Used:</HeadingTertiary>
        <ul>
          <li>
            {/* <FaReact></FaReact> */}
            <span>React</span>
          </li>

          <li>
            {/* <FaSass></FaSass> */}
            <span>Sass</span>
          </li>

          <li>
            {/* <BiLogoFirebase /> */}
            <span>Firebase</span>
          </li>
          <li>
            {/* <FaGithub /> */}
            <span>Github</span>
          </li>

          <li>
            {/* <TbBrandVscode /> */}
            <span>Vs</span>
          </li>
          <li>
            {/* <FaFigma /> */}
            <span>Figma</span>
          </li>
        </ul>
      </div>

      <div className={classes.challenges}>
        <HeadingTertiary>Challenges Faced:</HeadingTertiary>
        <div className={classes.challenge__item}>
          <SubtitleHeading>01. Table Booking functionality</SubtitleHeading>
          <SupportingHeading>Description:</SupportingHeading>
          <p className={classes.description}>
            During the development of the table booking functionality, I
            encountered a challenging situation. The initial plan was to fetch
            available time data from an external API provided by Coursera.
            Unfortunately, this API failed to provide the necessary data.
          </p>

          <SupportingHeading>Challenges faced and solution:</SupportingHeading>

          <ul className={classes["challenge__solution"]}>
            <Item>
              With the assistance of Firebase, I stored the restaurant's opening
              hours. When a user selects a date, the app fetches and stores the
              opening hours and already reserved data using useReducer. This
              approach facilitates seamless filtering of available time slots
              based on the user-selected dates.
            </Item>

            <Item>
              Once the data is stored in useReducer, the filtered available time
              information is passed to the child component. This allows users to
              conveniently select an appropriate time for their reservation.
            </Item>
            <Item>
              Additionally, I addressed scenarios where all slots were booked by
              prompting users to choose an alternative date. This ensures that
              users cannot select a date when the restaurant is closed,
              especially on Sundays.
            </Item>
          </ul>
        </div>
        <div className={classes.challenge__item}>
          <SubtitleHeading>
            02. Testing Asynchronous Operations Challenge
          </SubtitleHeading>
          <SupportingHeading>Description:</SupportingHeading>
          <p>
            A significant challenge in the development process revolved around
            writing tests for form submissions where fetch requests were made to
            store data in Firebase. Traditional mocking methods proved
            challenging due to the complex nature of simulating these fetch
            requests.
          </p>

          <SupportingHeading>Challenges faced and solution:</SupportingHeading>

          <ul className={classes["challenge__solution"]}>
            <Item>
              To address this challenge, I explored and implemented an
              alternative solution:
            </Item>

            <Item>
              Introduced "jest-fetch-mock," a third-party package designed to
              simplify the mocking of fetch calls. This package allows for easy
              simulation of HTTP requests, enabling precise control over the
              responses needed during testing. "jest-fetch-mock" under the
              surface uses Jest's built-in support for mocking.
            </Item>

            <Item>
              Exported the actual function handler responsible for making the
              fetch request to Firebase. This step was crucial for achieving a
              more realistic simulation of the asynchronous operation during
              testing.
            </Item>

            <Item>
              Used React Testing Library alongside Jest to compare the expected
              outcomes to the actual results. This ensured code behaved as
              intended.
            </Item>
          </ul>
        </div>
      </div>
      <div className={classes["project__keyFeatures"]}>
        <HeadingTertiary>Key Features</HeadingTertiary>
        <ul className={classes.list}>
          <Item>
            Implemented a solution to address users' challenges with online
            table reservations for Little Lemon Restaurant, offering a more
            streamlined and convenient booking process.
          </Item>

          <Item>
            A booking confirmation feature to provide users with acknowledgment
            once their reservation is successfully confirmed.
          </Item>

          <div className={classes.featuresImage}>
            {/* <img src={confirmation} alt="" /> */}
          </div>
        </ul>
      </div>
      <div className={classes["future-enhacements"]}>
        <HeadingTertiary>Future enhancements</HeadingTertiary>
        <div className={classes.challenge__item}>
          <SubtitleHeading>01. User authenticaion</SubtitleHeading>
          <SupportingHeading>Description:</SupportingHeading>
          <p className={classes.description}>
            I plan to enhance the Little Lemon Restaurant website by introducing
            user authentication. This feature allow user to have a secure and
            personalized experience.
          </p>

          <SupportingHeading>Implementation details</SupportingHeading>

          <ul className={classes["challenge__solution"]}>
            <Item>
              Users will have the option to log in or sign up before making a
              reservation, this will allow users to save preferences.
            </Item>

            <Item>
              Personalized user accounts to improve the overall experience,
              making the booking process more user-friendly.
            </Item>
          </ul>
        </div>
        <div className={classes.challenge__item}>
          <SubtitleHeading>02. Online Ordering Feature</SubtitleHeading>
          <SupportingHeading>Description:</SupportingHeading>
          <p className={classes.description}>
            To further enhance the functionality of the Little Lemon Restaurant
            website, I plan to introduce an online ordering system. This feature
            will enable customers to order weeks specials online.
          </p>

          <SupportingHeading>Implementation details</SupportingHeading>

          <ul className={classes["challenge__solution"]}>
            <Item>
              Fetch and display real-time information about weeks specials and
              allow users to choose and place order.
            </Item>

            <Item>
              Provide detailed information about each menu item to help users
              make informed decisions.
            </Item>

            <div className={classes.featuresImage}>
              {/* <img src={weekSpecials} alt="weeks specials" /> */}
            </div>
          </ul>
        </div>
      </div>
      <div className={classes["project__lesson-learned"]}>
        <HeadingTertiary>Lesson learned</HeadingTertiary>
        <ul className={classes.list}>
          <Item>
            Recognized the importance of understanding and solving user
            problems, giving a clear purpose to the app.
          </Item>
          <Item>
            Emphasized the significance of detailed planning using design
            prototypes and wireframes to foresee and address potential issues.
          </Item>
          <Item>
            Implemented meta tags and Open Graph Protocol for better search
            engine visibility and social media sharing.
          </Item>
          <Item>
            Prioritized user accessibility using semantic HTML, ARIA attributes,
            and clear form labels.
          </Item>
          <Item>
            Understood the importance of rigorous testing, ensuring the app
            functions well, and successfully overcoming testing challenges.
          </Item>
          <Item>
            Utilized tools like Lighthouse and PageSpeed to optimize website
            performance, aiming for better user experience.
          </Item>
        </ul>
      </div>

      <div className={classes["project__designs"]}>
        <HeadingTertiary>Website preview</HeadingTertiary>

        <ul className={classes.list}>
          <Item>Home page - Restaurant's back story section</Item>
          <div className={classes.featuresImage}>
            {/* <img src={backStory} alt="back story" /> */}
          </div>
          <Item>Home page - Footer section</Item>
          <div className={classes.featuresImage}>
            {/* <img src={footer} alt="footer" /> */}
          </div>
          <Item>Home page - Testimonial section</Item>
          <div className={classes.featuresImage}>
            {/* <img src={testimonials} alt="testimonials" /> */}
          </div>
        </ul>
      </div>
      <div className={classes.btns}>
        <ButtonLink href="https://bookspotlight.netlify.app/">
          Live Demo
        </ButtonLink>
        <ButtonLink href="https://github.com/Bhavani-Bolloju/bookSpotLight">
          Github
        </ButtonLink>
      </div>
    </section>
  );
}

export default BookSpotLight;
