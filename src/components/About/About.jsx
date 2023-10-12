// styles
import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.aboutContainer}>
        <h2>About Me</h2>
        <p>
          As a former solicitor my whole working life has been about supporting people and helping
          them to attain their goals. I want to continue to support people, albeit in different
          ways.
        </p>
        <p>
          I have a family of people and dogs. We all love being active and outdoors as much as
          possible, and on those days when going out is not such a joy, I rely on my dogs to remind
          me of the wonderful environment out there.
        </p>
        <p>I am a keen, but unsuccessful gardener, and an atrocious golfer!</p>
        <p>
          I trained with highly acclaimed Civil Ceremonies Ltd and obtained Level 3 NOCN Diploma in
          wedding etc. ceremonies and funerals.
        </p>
        <p>
          I am a member of The Association of Independent Celebrants under whose umbrella I am
          insured.
        </p>
      </div>
    </section>
  );
}
