import classes from "./Recommendation.module.scss";
import HeadingTertiary from "../ui/HeadingTertiary";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { ButtonLink } from "../ui/ButtonOutline";

function Recommendation() {
  return (
    <section className={classes.recommendation} id="recommendation">
      <div>
        <HeadingTertiary>Recommendations</HeadingTertiary>
        <div className={classes.container}>
          <RiDoubleQuotesL className={classes.left} />
          <blockquote>
            I wholeheartedly believe that Bolloju Bhavani is an exceptional
            individual who would be a valuable asset to any organization or
            academic institution. Her combination of technical expertise,
            dedication, and interpersonal skills makes her stand out among her
            peers.
          </blockquote>
          <RiDoubleQuotesR className={classes.right} />
        </div>
        <div className={classes.details}>
          <span className={classes.name}>Nishi patel</span>
          <span className={classes.position}>COO and HR Manager</span>
          <span className={classes.company}>
            Ouranos Robotics Private Limited
          </span>
        </div>

        <div className={classes.CTA}>
          <ButtonLink href="https://drive.google.com/file/d/12xXpMVy_cAr_Y5t4am7GNtX3l6wT9JYn/view?usp=sharing">
            Read letter
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export default Recommendation;
