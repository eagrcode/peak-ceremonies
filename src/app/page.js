import Image from "next/image";
import styles from "./page.module.scss";

// context
import { useIsMenuOpenContext } from "@/context/IsMenuOpenContext";

// components
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Ceremonies from "@/components/Ceremonies/Ceremonies";
import Considerations from "@/components/Considerations/Considerations";
import Pricing from "@/components/Pricing/Pricing";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Ceremonies />
      <Considerations />
      <Pricing />
      <Contact />
    </main>
  );
}
