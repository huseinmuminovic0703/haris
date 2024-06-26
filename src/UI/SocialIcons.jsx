import emailIcon from "../images/SocialIcons/email.png";
import instagramIcon from "../images/SocialIcons/instagramicon.png";
import linkedinIcon from "../images/SocialIcons/linkedin.png";
import upworkIcon from "../images/SocialIcons/upwork.png";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../styles/SocialIcons.module.css";
AOS.init({
  duration: 1000,
  once:true
});

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      <div className={styles.circle} data-aos="fade-down" data-aos-delay="0">
        <a href="mailto:gearmindsengineering@gmail.com">
          <img src={emailIcon} alt="Email Icon" className={styles.icon} />
        </a>
      </div>
      <div className={styles.circle} data-aos="fade-down" data-aos-delay="200">
        <a href="https://www.instagram.com/gear_minds/">
          <img
            src={instagramIcon}
            alt="Instagram Icon"
            className={styles.icon}
          />
        </a>
      </div>
      <div className={styles.circle} data-aos="fade-down" data-aos-delay="400">
        <a href="https://www.linkedin.com/in/haris-osmanagic-bb0696208/">
          <img src={linkedinIcon} alt="LinkedIn Icon" className={styles.icon} />
        </a>
      </div>
      <div className={styles.circle} data-aos="fade-down" data-aos-delay="600">
        <a href="https://www.upwork.com/freelancers/hariso2">
          <img src={upworkIcon} alt="Upwork Icon" className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
