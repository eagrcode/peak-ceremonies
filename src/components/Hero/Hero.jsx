// styles
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <h1>Peak Ceremonies</h1>
        <em>Personal Ceremonies from Your Heart</em>
        <a href="#contact">
          <button className={styles.heroBtn}>Get in Touch</button>
        </a>
      </div>
    </section>
  );
}
