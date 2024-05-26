/* eslint-disable react/no-unescaped-entities */
// import React from "react";
import classes from "./BookSpotLight.module.scss";
import SecondaryHeading from "../../ui/SecondaryHeading";
import ImagesContainer from "../../ui/ImagesContainer";

import mobileView from "../../../assets/project/bookspotLight/bookspotlight_mobile.png";
import desktopView from "../../../assets/project/bookspotLight/bookspotlight_desktop.png";

import HeadingTertiary from "../../ui/HeadingTertiary";
import { Item } from "../../ui/UIComponents";
import {
  SubtitleHeading,
  SupportingHeading,
  SupportingSubHeading
} from "../../ui/Headings";
import { ButtonLink } from "../../ui/ButtonOutline";

import authenticationPage from "../../../assets/project/bookspotLight/bookSpotLight-authentication.png";
import bookmarks from "../../../assets/project/bookspotLight/bookSpotLight-bookmarks.png";
import bookDetailPage from "../../../assets/project/bookspotLight/bookSpotLight-detailBook.png";
import genreSection from "../../../assets/project/bookspotLight/bookSpotLight-genre-section.png";
import moreBooks from "../../../assets/project/bookspotLight/bookSpotLight-more.png";
import recommendedBook from "../../../assets/project/bookspotLight/bookSpotLight-recommended-books.png";
import searchResults from "../../../assets/project/bookspotLight/bookSpotLight-search-results.png";

function BookSpotLight() {
  return (
    <section className={classes.project}>
      <SecondaryHeading>little lemon restaurant</SecondaryHeading>
      <ImagesContainer
        image1={desktopView}
        image2={mobileView}
      ></ImagesContainer>
      <div className={classes["project__overview"]}>
        <HeadingTertiary>Project overview</HeadingTertiary>
        <ul className={classes.list}>
          <Item>
            The website aims to bring the latest trending books together in one
            place, making it easy for users to{" "}
            <span className={classes.highlight}>discover new reads </span>.
          </Item>
          <Item>
            Books are{" "}
            <span className={classes.highlight}>categorized by genres</span> ,
            allowing users to explore books in their favorite categories.
          </Item>
          <Item>
            Each book has a{" "}
            <span className={classes.highlight}>detailed overview</span>,
            including a description, author information, and publication
            details.
          </Item>
          <Item>
            Additionally, the site{" "}
            <span className={classes.highlight}>recommends books</span> based on
            current Book and author being viewed.
          </Item>
        </ul>
      </div>
      <div className={classes.goals}>
        <HeadingTertiary>Project Goals and Objectives:</HeadingTertiary>
        <ul className={classes.list}>
          <Item>
            The primary goal is to create{" "}
            <span className={classes.highlight}>
              an intuitive and user-friendly platform
            </span>{" "}
            for book lovers.
          </Item>
          <Item>
            <span className="highlight"></span>
            Users can{" "}
            <span className={classes.highlight}>
              search for books using keywords
            </span>{" "}
            , making it easy to find specific titles or authors.
          </Item>
          <Item>
            <span className={classes.highlight}>
              categorize books by genres
            </span>{" "}
            , providing users with a seamless browsing experience.
          </Item>
          <Item>
            By hovering over a book, users get a{" "}
            <span className={classes.highlight}>quick overview</span> without
            needing to navigate away from their current page.
          </Item>
          <Item>
            Signed-in users can{" "}
            <span className={classes.highlight}>bookmark</span> their favorite
            books for later reference.
          </Item>
          <Item>
            The website is designed to be{" "}
            <span className={classes.highlight}>
              visually appealing and optimize for fast loading
            </span>{" "}
            , ensuring a smooth and engaging user experience.
          </Item>
        </ul>
      </div>
      <div className={classes.technology}>
        <HeadingTertiary>Technologies Used:</HeadingTertiary>
        <ul>
          <Item>
            {" "}
            <span className={classes.highlight}>React JS:</span> Chosen for its
            efficiency in building dynamic and interactive user interfaces.
          </Item>
          <Item>
            {" "}
            <span className={classes.highlight}>React Bootstrap:</span> Used for
            responsive design and pre-built components, speeding up development.
          </Item>
          <Item>
            {" "}
            <span className={classes.highlight}>Firebase:</span> Utilized for
            user authentication and real-time database, providing a secure and
            scalable backend solution.
          </Item>
          <Item>
            {" "}
            <span className={classes.highlight}>TypeScript:</span> Ensures type
            safety and improves code quality with static typing.
          </Item>
          <Item>
            {" "}
            <span className={classes.highlight}>SWR:</span> A custom tool for
            fetching data, providing efficient data handling and caching.
          </Item>
        </ul>
      </div>

      <div className={classes.challenges}>
        <HeadingTertiary>Challenges Faced:</HeadingTertiary>
        <div className={classes.challenge__item}>
          <SubtitleHeading>
            01. Implementing Auto-Logout Feature with Firebase Authentication
          </SubtitleHeading>
          <SupportingHeading>Description:</SupportingHeading>
          <p className={classes.description}>
            One of the main challenges I faced was implementing an auto-logout
            feature. Firebase Authentication generates a new session token when
            a user logs in, which has a validity period of one hour. After this
            period, Firebase automatically refreshes the token and extends the
            session by another hour, which means the session never truly expires
            unless the logout method is explicitly called.
          </p>

          <SupportingHeading>How did I achieve this?</SupportingHeading>

          <ul className={classes["challenge__solution"]}>
            <li>
              <SupportingSubHeading>
                1. Store Token on Login:
              </SupportingSubHeading>
              <ul className={classes["challenge__solution-sublist"]}>
                <Item>Save the token to local storage upon user login.</Item>
                <Item>
                  Ensure the token is stored only once when the user logs in for
                  the first time, provided there is no stored token in local
                  storage.
                </Item>
              </ul>
            </li>
            <li>
              <SupportingSubHeading>
                2. Check Expiry on Each Refresh:
              </SupportingSubHeading>
              <ul className={classes["challenge__solution-sublist"]}>
                <Item>
                  On each page refresh or authentication state change, retrieve
                  the stored token and check if it has expired.
                  <ul>
                    <li>
                      If the token has not expired, the session continues as
                      usual.
                    </li>
                    <li>
                      If the token has expired, log out the user and remove the
                      stored token.
                    </li>
                  </ul>
                </Item>
              </ul>
            </li>
            <li>
              <SupportingSubHeading>
                3. Ensuring Consistency:
              </SupportingSubHeading>
              <ul className={classes["challenge__solution-sublist"]}>
                <Item>
                  useState is updated with the token value only when there is no
                  stored token in local storage..
                </Item>
                <Item>
                  useState is also updated when the user logs out to ensure the
                  application state is consistent.
                </Item>
                <Item>
                  This prevents unnecessary state updates and ensures the
                  application uses the stored token correctly.
                </Item>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["future-enhacements"]}>
        <HeadingTertiary>Future enhancements</HeadingTertiary>
        <ul>
          <Item>
            Future updates will include a reading tracker to help users monitor
            their progress
          </Item>
          <Item>Goal-setting features to motivate reading habits</Item>
          <Item>
            The ability to add reviews and ratings for books, sharing their
            thoughts and recommendations
          </Item>
        </ul>
      </div>
      <div className={classes["project__lesson-learned"]}>
        <HeadingTertiary>Lesson learned</HeadingTertiary>
        <ul className={classes.list}>
          <Item>
            During development, I learned the importance of optimizing
            performance through lazy loading images, which significantly
            improved page load times.
          </Item>
          <Item>
            Loading parts of pages only when needed, known as code splitting,
            reduced initial load time and improved overall site performance.
          </Item>
          <Item>
            Additionally, integrating Google API broadened the site's
            functionality, providing richer data for book details and
            recommendations.
          </Item>
        </ul>
      </div>

      <div className={classes["project__designs"]}>
        <HeadingTertiary>Website preview</HeadingTertiary>

        <ul className={classes.list}>
          <Item>Home page - Genre section section</Item>
          <div className={classes.featuresImage}>
            <img src={genreSection} alt="genre section" />
          </div>
          <Item>Authentication Page</Item>
          <div className={classes.featuresImage}>
            <img src={authenticationPage} alt="user authentication" />
          </div>
          <Item>Detail book Page</Item>
          <div className={classes.featuresImage}>
            <img src={bookDetailPage} alt="detail book" />
          </div>
          <Item>Recommended Books</Item>
          <div className={classes.featuresImage}>
            <img src={recommendedBook} alt="recommended books" />
          </div>
          <Item>Load more books of particular genre</Item>
          <div className={classes.featuresImage}>
            <img src={moreBooks} alt="more books" />
          </div>
          <Item>Bookmarks page</Item>
          <div className={classes.featuresImage}>
            <img src={bookmarks} alt="bookmarks" />
          </div>
          <Item>Search results</Item>
          <div className={classes.featuresImage}>
            <img src={searchResults} alt="search results" />
          </div>
        </ul>
      </div>
      <div className={classes.performance}>
        <HeadingTertiary>
          Performance Enhancements and Best Practices:
        </HeadingTertiary>
        <div className={classes.challenge__item}>
          <ul className={classes["challenge__solution"]}>
            <li>
              <SupportingSubHeading>1. Meta Tags :</SupportingSubHeading>
              <ul className={classes["challenge__solution-sublist"]}>
                <Item>
                  Added appropriate meta tags in the HTML head section to
                  improve SEO and ensure the website is properly indexed by
                  search engines.
                </Item>
              </ul>
            </li>
            <li>
              <SupportingSubHeading>
                2. Lazy Loading with React :
              </SupportingSubHeading>
              <ul>
                <Item>
                  Utilized React's built-in lazy load feature to load sections
                  of the page on demand. This approach prevents browser overload
                  and reduces initial page load time, significantly improving
                  web performance.
                </Item>
              </ul>
            </li>
            <li>
              <SupportingSubHeading>
                3. On-Demand Data Fetching :
              </SupportingSubHeading>
              <ul>
                <Item>
                  Used the same library to fetch data on demand as the user
                  scrolls, instead of fetching all data upfront. This reduces
                  unnecessary data loading and enhances the overall user
                  experience.
                </Item>
              </ul>
            </li>
            <li>
              <SupportingSubHeading>
                4. Semantic HTML and Accessibility :
              </SupportingSubHeading>
              <ul>
                <Item>
                  Employed appropriate HTML semantic tags and adhered to
                  accessibility principles to ensure the website is both
                  user-friendly and accessible to all users.
                </Item>
              </ul>
            </li>
            <li>
              <SupportingSubHeading>
                5. Performance improvements :
              </SupportingSubHeading>
              <ul>
                <Item>
                  Overall performance improved by 30% according to PageSpeed
                  Insights and Lighthouse developer tools
                </Item>
              </ul>
            </li>
          </ul>
          <p className={classes.summary}>
            These optimizations have made a significant impact, and I continue
            to explore further making performance optimization an ongoing
            journey.
          </p>
        </div>
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
