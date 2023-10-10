import React from "react";
import classes from "./WeatherProjectDetail.module.scss";
import SecondaryHeading from "../../ui/SecondaryHeading";
import weather1 from "../../../assets/project/weather/weather1.png";
import weather2 from "../../../assets/project/weather/weather2.png";
import HeadingTertiary from "../../ui/HeadingTertiary";
import { Item } from "../../ui/UIComponents";
import { SubtitleHeading, SupportingHeading } from "../../ui/Headings";

import ImagesContainer from "../../ui/ImagesContainer";

import { ButtonLink } from "../../ui/ButtonOutline";

function WeatherProjectDetail() {
  return (
    <section className={classes.weatherDetailPage}>
      <SecondaryHeading>Weather App</SecondaryHeading>
      <ImagesContainer image1={weather1} image2={weather2} />

      <div className={classes.overview}>
        <HeadingTertiary>Project overview</HeadingTertiary>
        <ul>
          <Item>Developed with React.js for a dynamic user interface.</Item>
          <Item>
            Utilized open-source APIs for accurate real-time weather data.
          </Item>
          <Item>
            Offers current weather conditions, hourly forecasts, and week-long
            weather reports.
          </Item>
          <Item>
            Features an interactive graph to visualize hourly weather changes.
          </Item>
          <Item>
            Employs geolocation to provide live forecasts based on the user's
            current location
          </Item>
        </ul>
      </div>
      <div className={classes.features}>
        <HeadingTertiary>key features</HeadingTertiary>
        <ul>
          <Item>
            <span className={classes.highlight}> Live Updates:</span> Stay
            informed with the latest weather data for your chosen location.
          </Item>
          <Item>
            <span className={classes.highlight}> Hourly Insights:</span>{" "}
            Visualize hourly weather forecasts for quick decision-making.
          </Item>
          <Item>
            <span className={classes.highlight}>Daily Forecasts: </span>
            Plan ahead with daily weather predictions at your fingertips.
          </Item>
          <Item>
            <span className={classes.highlight}>Global Coverage: </span>
            Access weather information for any place on the planet.
          </Item>
        </ul>
      </div>
      <div className={classes.technologies}>
        <HeadingTertiary>technologies used</HeadingTertiary>
        <ul>
          <li>react js</li>
          <li>redux</li>
          <li>tailwind</li>
          <li>reacharts</li>
          <li>splide js</li>
          <li>framer motion</li>
          <li>react icons</li>
        </ul>
      </div>
      <div className={classes.challenges}>
        d<HeadingTertiary>Challenges faced</HeadingTertiary>
        <div>
          <SubtitleHeading>
            01. Simplifying Weather Data Integration
          </SubtitleHeading>
          <SupportingHeading>Description:</SupportingHeading>
          <p>
            When creating the weather app, I had to fetch different types of
            weather data—daily forecasts, hourly updates, and real-time
            conditions. Traditionally, this could lead to repetitive and complex
            code. To make things easier and more efficient, I chose to use Redux
            Toolkit Query (RTK Query).
          </p>

          <SupportingHeading>Challenges faced and solution:</SupportingHeading>

          <ul>
            <Item>
              Fetching and syncing various data sets, like real-time weather,
              hourly updates, and daily forecasts, without repeating code was a
              major challenge.
            </Item>
            <Item>
              If I had followed the traditional way, I would have needed to
              write separate pieces of code for each type of weather data. This
              could have led to repeating the same code. But instead, I chose
              RTK Query, which made things smoother and more efficient.
            </Item>
            <Item>
              By implementing RTK Query, I leveraged its capabilities for
              efficient data fetching and caching. This allowed me to fetch the
              required data.
            </Item>
            <Item>
              RTK Query's built-in caching mechanisms reduced the need for
              repetitive network requests, enhancing app performance and
              reducing server load. This approach not only simplified the
              development process but also resulted in cleaner, more
              maintainable code.
            </Item>
          </ul>
        </div>
      </div>
      <div className={classes.enhancements}>
        <HeadingTertiary>future enhancements</HeadingTertiary>
        <div>
          <SubtitleHeading>01. City-Specific Weather Search</SubtitleHeading>
          <SupportingHeading>Description:</SupportingHeading>
          <p>
            In my ongoing commitment to enhancing the weather app, I'm planning
            an exciting feature. This upcoming addition will enable users to
            explore weather data for cities worldwide, allowing access to
            real-time, daily, and hourly weather information.
          </p>
          <SupportingHeading>Key components:</SupportingHeading>
          <ul>
            <Item>
              A search bar will be placed within the app, allowing users to
              enter the name or location of the city they want to explore.
            </Item>
            <Item>
              Upon entering a city's name or location, the app will fetch and
              display a wealth of weather data, including current conditions,
              hourly forecasts, and daily outlooks.
            </Item>
            <Item>
              This feature guarantees that users can stay updated on weather
              conditions worldwide.
            </Item>
          </ul>
        </div>
        <div>
          <SubtitleHeading>02. Tabular Hourly Weather Data</SubtitleHeading>
          <SupportingHeading>Description:</SupportingHeading>
          <p>
            I'm planning to introduce a tabular display of hourly weather data.
            This enhancement aims to enhance user-friendliness, especially for
            those using smaller screens like mobile devices.
          </p>
          <SupportingHeading>Key components:</SupportingHeading>
          <ul>
            <Item>
              The tabular format will give users a clear and easy way to see
              hourly weather forecasts. Users can quickly find the information
              they're looking for.
            </Item>
            <Item>
              Users will have access to visual icons and detailed information
              for each hourly weather forecast, including temperature,
              precipitation, wind speed, and more.
            </Item>
          </ul>
        </div>
      </div>

      <div className={classes.btns}>
        <ButtonLink href="https://user-authentication-e7794.web.app/">
          Live Demo
        </ButtonLink>
        <ButtonLink href="https://github.com/Bhavani-Bolloju/Weather-App">
          Github
        </ButtonLink>
      </div>
    </section>
  );
}

export default WeatherProjectDetail;
