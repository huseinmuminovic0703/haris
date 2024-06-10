import { useForm } from "../data/sendingEmail";
import styles from "../styles/ContactWhite.module.css"
import SocialIcons from "./SocialIcons";
const ContactWhite = () => {
      const {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    errors,
    sendEmail,
  } = useForm();

  return (
    <div className={styles.contactUs} id="contactSec">
      <h2>CONTACT</h2>
      <p className={styles.text}>
        <span>If you have a question or would like to request a quote,</span>
        <span>
          please feel free to get in contact by filling in the form below or
          send an email to: <strong>gearmindsengineering@gmail.com</strong>
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
        {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
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
  );
};
export default ContactWhite
