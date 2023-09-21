// styles
import styles from "./CelebrationCeremony.module.scss";

export default function CelebrationCeremony() {
  return (
    <div className={styles.section}>
      <div className={styles.textCon}>
        <h2>Celebration Ceremony</h2>
        <p>
          Ideally, we will meet as soon as possible, so that you can decide whether you are happy
          for me to be your celebrant. If so, I will listen to your story, hear about the funny and
          the not so funny times, that have got you this far.
        </p>
        <p>
          I will create a script for you to approve, which I will then deliver at your ceremony. If
          we need more contact, I am always happy with Zoom, in addition to emails and phone calls
          until you are happy with the final product.
        </p>
        <p>
          It may be that due to your work/life commitments, we cannot meet until much later. In
          which case, we can meet virtually in the first instance, and I work as above, to ensure
          that your ceremony is as you want it.
        </p>
        <p>
          On the day, I will arrive in advance, and meet your guests – particularly those who may be
          actively participating in the ceremony. I will help to reduce the stress, so that you can
          enjoy the occasion more. And when it is over, I will leave you to enjoy the rest of the
          day – unless you need another pair of hands in throwing confetti, making an arch, finding
          the dog that carried the rings, etc!
        </p>
        <p>It’s your day – if it’s physically possible, we do it your way!</p>
      </div>
      <div className={styles.imageCon}>IMAGE</div>
    </div>
  );
}
