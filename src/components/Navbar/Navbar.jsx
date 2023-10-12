"use client";

// styles
import styles from "./Navbar.module.scss";

// components
import Hamburger from "./Hamburger/Hamburger";

// next
import Link from "next/link";

// context
import { useIsMenuOpenContext } from "@/context/IsMenuOpenContext";

export default function Navbar() {
  // initial state
  const { isOpen, setIsOpen } = useIsMenuOpenContext();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.logo} href="/">
          Peak Ceremonies
        </Link>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={isOpen ? `${styles.menuContainer} ${styles.isOpen}` : styles.menuContainer}>
          <ul className={styles.menu}>
            <li className={styles.item} onClick={() => setIsOpen(false)}>
              <Link className={styles.link} href="#about">
                About
              </Link>
            </li>
            <li className={styles.item} onClick={() => setIsOpen(false)}>
              <Link className={styles.link} href="#ceremonies">
                Ceremonies
              </Link>
            </li>
            <li className={styles.item} onClick={() => setIsOpen(false)}>
              <Link className={styles.link} href="#considerations">
                Considerations
              </Link>
            </li>
            <li className={styles.item} onClick={() => setIsOpen(false)}>
              <Link className={styles.link} href="#pricing">
                Pricing
              </Link>
            </li>
            <li className={styles.item} onClick={() => setIsOpen(false)}>
              <Link className={styles.link} href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
