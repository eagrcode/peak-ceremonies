// styles
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <h1>Peak Ceremonies</h1>
        <em>Personal Ceremonies from Your Heart</em>
        <button className={styles.heroBtn}>Contact</button>
        {/* <div className={styles.textWrapper}>
          <div className={styles.textCon}>
            <p>
              Everyone should have at least one day in their life that is all about their happiness.
            </p>
          </div>
          <div className={styles.textCon}>
            <p>A day when they can show love for a partner.</p>
          </div>
          <div className={styles.textCon}>
            <p>A day when they can welcome a baby or child into the family.</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
