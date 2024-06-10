import { useState } from "react";
import emailjs from "@emailjs/browser";

export const useForm = () => {
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

  return {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    errors,
    sendEmail,
  }
}