// styles
import styles from "./CommitmentCeremony.module.scss";

export default function CommitmentCeremony() {
  return (
    <div className={styles.section}>
      <div className={styles.textCon}>
        <h3>Commitment Ceremony</h3>
        <p>
          For many, a marriage/civil partnership is not for them. The legalities are not what they
          want, or perhaps such legalities might cause complications for people who have been
          through a legal ceremony in the past and/or have family from a previous relationship.
        </p>
        <p>
          But that does not mean that you cannot have a demonstration of your love for one another.
          A Commitment Ceremony can do just that – showcase your commitment to, and love for, each
          other. It can take whatever form you wish in a place of your choosing.
        </p>
        <p>
          I will help you carve a ceremony that is you – unique and personal, - an expression of
          love, in the presence of those who love you.
        </p>
      </div>
      <div className={styles.imageCon}>IMAGE</div>
    </div>
  );
}
