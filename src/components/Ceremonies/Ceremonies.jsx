// styles
import CelebrationCeremony from "./CelebrationCeremony/CelebrationCeremony";
import styles from "./Ceremonies.module.scss";
import CommitmentCeremony from "./CommitmentCeremony/CommitmentCeremony";
import NamingCeremony from "./NamingCeremony/NamingCeremony";
import RenewalCeremony from "./RenewalCeremony/RenewalCeremony";

export default function Ceremonies() {
  return (
    <section className={styles.section}>
      <CelebrationCeremony />
      <RenewalCeremony />
      <CommitmentCeremony />
      <NamingCeremony />
    </section>
  );
}
