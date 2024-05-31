import { useState, useEffect } from "react";
import SocialIcons from "./SocialIcons";
import classes from "../styles/Contact.module.css";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

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
      })
      .catch((error) => {
        console.log("Error with sending email", error);
        alert("There was an error sending your email. Please try again later.");
        return;
      });
    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
    alert(
      "Thank you for reaching out! Your email has been successfully sent. Our team will get back to you shortly."
    );
  };

  const fixedCubePositions = [
    { top: "20%", left: "10%" },
    { top: "45%", left: "13%" },
    { top: "20%", left: "80%" },
    { top: "75%", left: "70%" },
    { top: "60%", left: "80%" },
    { top: "35%", left: "70%" },
    { top: "80%", left: "20%" },
    { top: "30%", left: "8%" },
    { top: "50%", left: "20%" },
    { top: "32%", left: "80%" },
    { top: "15%", left: "85%" },
    { top: "65%", left: "85%" },
    { top: "75%", left: "65%" },
    { top: "85%", left: "35%" },
  ];

  const [visibleGroup, setVisibleGroup] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleGroup((prevGroup) => (prevGroup === 1 ? 2 : 1));
    }, 1150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${classes.ContactUs}`} id="contactSec">
      <h2 data-aos="fade-down">CONTACT</h2>
      <p data-aos="fade-down" className={classes.text}>
        <span>If you have a question or would like to request a quote,</span>
        <span>
          please feel free to get in contact by filling in the form below or
          send an email to: gearmindsengineering@gmail.com
        </span>
      </p>
      <form onSubmit={sendEmail} className={classes.contactForm}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className={errors.name ? classes.errorInput : ""}
        />
        {errors.name && <p className={classes.errorMessage}>{errors.name}</p>}
        <input
          value={email}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? classes.errorInput : ""}
        />
        {errors.email && <p className={classes.errorMessage}>{errors.email}</p>}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          name="message"
          rows="7"
          placeholder="Message"
          className={errors.message ? classes.errorInput : ""}
        ></textarea>
        {errors.message && (
          <p className={classes.errorMessage}>{errors.message}</p>
        )}
        <button type="submit" className={classes.viewButton}>
          SEND MESSAGE
        </button>
      </form>
      <SocialIcons />
      <div className={classes.backgroundCubes}>
        {fixedCubePositions.map((position, index) => {
          const isVisible =
            (visibleGroup === 1 && index < 7) ||
            (visibleGroup === 2 && index >= 7);

          return (
            <div
              key={index}
              className={`${classes.cube} ${
                isVisible ? classes.grow : classes.shrink
              }`}
              style={position}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactUs;
