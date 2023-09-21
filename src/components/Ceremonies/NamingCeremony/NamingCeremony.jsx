// styles
import styles from "./NamingCeremony.module.scss";

export default function NamingCeremony() {
  return (
    <div className={styles.section}>
      <div className={styles.imageCon}>IMAGE</div>
      <div className={styles.textCon}>
        <h3>Naming Ceremony</h3>
        <p>
          A naming ceremony is a wonderful opportunity to mark the entrance of your baby to the
          world, or another child to your family. It serves to strengthen the bonds between
          parents/guardians and children, at the same time serving as a reminder to such parents and
          other adults of their privilege in playing a supporting role in the upbringing of the
          child. It can be a most beautiful ceremony.
        </p>
        <p>
          {`I will meet with you (and the little one's please!) to hear what you would like to have
          included in the ceremony. Perhaps other family members would like to be involved in
          reading a verse, lighting a candle and more.`}
        </p>
        <p>
          You will approve the final format before we go to what will be a most special day for you
          all.
        </p>
      </div>
    </div>
  );
}
