"use client";

// styles
import styles from "./Hamburger.module.scss";

export default function Hamburger({ isOpen, setIsOpen }) {
  // toggle nav menu
  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      <div className={isOpen ? `${styles.hamburger} ${styles.active}` : styles.hamburger}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </button>
  );
}
