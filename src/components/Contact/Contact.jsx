// styles
import styles from "./Contact.module.scss";
import ContactForm from "./ContactForm/ContactForm";

export default function Contact() {
  return (
    <section className={styles.section}>
      <h2>Get in Touch</h2>
      <ContactForm />
    </section>
  );
}
