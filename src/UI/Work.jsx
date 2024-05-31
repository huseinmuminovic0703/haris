import styles from "../styles/Work.module.css";
import PhotoAlbum from "react-photo-album";
import kasikara from "../images/kasikara.jpg";
import schema from "../images/schema.png";
import schema2 from "../images/schema2.png";
import noz1 from "../images/noz1.jpg";
import noz2 from "../images/noz2.jpg";
import SocialIcons from "./SocialIcons";
import emailjs from "@emailjs/browser";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Work = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "GearMindsEngineering",
      message: message,
    };

    emailjs
      .send(
        "service_0xfy13f",
        "template_32xdeiq",
        templateParams,
        "RHAKTWLS8h2tZ7Wmg"
      )
      .then((response) => {
        console.log(response, "response");
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
      })
      .catch((error) => {
        console.log("Error with sending email", error);
        alert("There was an error sending your email. Please try again later.");
      });
    alert(
      "Thank you for reaching out! Your email has been successfully sent. Our team will get back to you shortly."
    );
  };

  const photos = [
    { src: kasikara, width: 800, height: 600 },
    { src: schema, width: 800, height: 600 },
    { src: schema2, width: 800, height: 600 },
    { src: noz1, width: 800, height: 600 },
    { src: noz2, width: 800, height: 600 },
  ];

  return (
    <div className={styles.workContainer}>
      <NavLink to={"/"}>
        <button className={styles.backButton}>BACK</button>
      </NavLink>

      <PhotoAlbum
        layout="rows"
        photos={photos}
        columns={(containerWidth) => {
          if (containerWidth < 600) return 1;
          if (containerWidth < 900) return 2;
          return 3;
        }}
      />
      <div className={styles.contactUs} id="contactSec">
        <h2>CONTACT</h2>
        <p className={styles.text}>
          <span>If you have a question or would like to request a quote,</span>
          <span>
            please feel free to get in contact by filling in the form below or
            send an email to: gearmindsengineering@gmail.com
          </span>
        </p>
        <form onSubmit={sendEmail} className={styles.contactForm}>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className={errors.name ? styles.errorInput : ""}
          />
          {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
          <input
            value={email}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? styles.errorInput : ""}
          />
          {errors.email && (
            <p className={styles.errorMessage}>{errors.email}</p>
          )}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            name="message"
            rows="7"
            placeholder="Message"
            className={errors.message ? styles.errorInput : ""}
          ></textarea>
          {errors.message && (
            <p className={styles.errorMessage}>{errors.message}</p>
          )}
          <button type="submit" className={styles.viewButton}>
            SEND MESSAGE
          </button>
        </form>
        <SocialIcons />
      </div>
    </div>
  );
};

export default Work;
