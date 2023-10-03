import React from "react";
import classes from "./WeatherProjectDetail.module.scss";
import SecondaryHeading from "../../ui/SecondaryHeading";
import weather1 from "../../../assets/project/weather/weather1.png";
import weather2 from "../../../assets/project/weather/weather2.png";
import HeadingTertiary from "../../ui/HeadingTertiary";
import { Item } from "../../ui/UIComponents";
import { SubtitleHeading, SupportingHeading } from "../../ui/Headings";

function WeatherProjectDetail() {
  return (
    <section className={classes.weatherDetailPage}>
      <SecondaryHeading>Weather App</SecondaryHeading>
      <div className={classes.images}>
        <div className={classes.image1}>
          <img src={weather1} alt="" />
        </div>
        <div className={classes.image2}>
          <img src={weather2} alt="" />
        </div>
      </div>
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
        <HeadingTertiary>Challenges faced</HeadingTertiary>
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
      <div>
        <HeadingTertiary>future enhancements</HeadingTertiary>
      </div>

      <div>links to live deme and github</div>
    </section>
  );
}

export default WeatherProjectDetail;
