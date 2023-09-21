// styles
import styles from "./Pricing.module.scss";

export default function Pricing() {
  return (
    <section className={styles.section}>
      <h2>Pricing</h2>
      <div className={styles.pricingCon}>
        <div className={styles.pricingItem}>
          <p>
            Celebration ceremonies – from £750.00 - to include personal meeting, all emails, phone
            calls and Zoom meetings and travel.
          </p>
        </div>

        <div className={styles.pricingItem}>
          <p>
            Naming Ceremonies – from £300 – to include personal meeting, all emails, phone calls and
            Zoom meetings and travel.
          </p>
        </div>

        <div className={styles.pricingItem}>
          <p>
            Renewal Of Vows – from £600 – to include personal meeting, all emails, phone calls and
            Zoom meetings and travel.
          </p>
        </div>

        <div className={styles.pricingItem}>
          <p>
            Commitment Ceremonies – from £600 – to include personal meeting, all emails, phone
            calls, Zoom meetings and travel.
          </p>
        </div>
      </div>
    </section>
  );
}
