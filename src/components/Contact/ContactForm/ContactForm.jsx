"use client";

// styles
import styles from "./ContactForm.module.scss";

// react
import { useState } from "react";

// react spinners
// import PulseLoader from "react-spinners/PulseLoader";

const initFormData = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  message: "",
  isLoading: false,
};

export default function ContactForm({ isSent, setIsSent }) {
  // initial state
  const [formData, setFormData] = useState(initFormData);

  // destructure form data
  const { firstName, lastName, emailAddress, message, isLoading } = formData;

  // update input values
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // submit contact form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormData((prev) => ({
      ...prev,
      isLoading: true,
    }));

    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        email: emailAddress,
        firstName: firstName,
        lastName: lastName,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      console.log(error);
      return;
    } else {
      setFormData((prev) => ({
        ...prev,
        firstName: "",
        lastName: "",
        emailAddress: "",
        message: "",
        isLoading: false,
      }));
      setIsSent(true);
    }
    console.log(firstName, lastName, emailAddress, message);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} method="POST">
      <div>
        <label className={styles.label} htmlFor="firstName">
          First name
        </label>
        <input
          className={styles.input}
          id="firstName"
          type="text"
          name="firstName"
          required
          value={firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="lastName">
          Last name
        </label>
        <input
          className={styles.input}
          id="lastName"
          type="text"
          name="lastName"
          required
          value={lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="email">
          Email Address
        </label>
        <input
          className={styles.input}
          id="email"
          type="email"
          name="emailAddress"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          value={emailAddress}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          className={styles.message}
          id="message"
          name="message"
          required
          minLength={10}
          value={message}
          onChange={handleChange}
        />
      </div>
      <button className={styles.button} type="submit">
        {/* {isLoading ? <PulseLoader color="hsl(250, 15%, 10%)" size={8} /> : "Submit"} */}
        Submit
      </button>
    </form>
  );
}
