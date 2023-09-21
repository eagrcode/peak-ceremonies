// styles
import styles from "./Pricing.module.scss";

export default function Pricing() {
  return (
    <section className={styles.section}>
      <h2>Pricing</h2>
      <div className={styles.pricingCon}>
        <div className={styles.pricingItem}>
          <h3>Celebration Ceremonies</h3>
          <p>
            from £750 - to include personal meeting, all emails, phone calls and Zoom meetings and
            travel.
          </p>
        </div>

        <div className={styles.pricingItem}>
          <h3> Naming Ceremonies</h3>
          <p>
            from £300 – to include personal meeting, all emails, phone calls and Zoom meetings and
            travel.
          </p>
        </div>

        <div className={styles.pricingItem}>
          <h3>Renewal Of Vows</h3>
          <p>
            from £600 – to include personal meeting, all emails, phone calls and Zoom meetings and
            travel.
          </p>
        </div>

        <div className={styles.pricingItem}>
          <h3> Commitment Ceremonies</h3>
          <p>
            from £600 – to include personal meeting, all emails, phone calls, Zoom meetings and
            travel.
          </p>
        </div>
      </div>
    </section>
  );
}
