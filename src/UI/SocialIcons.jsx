import emailIcon from "../images/email.svg";
import instagramIcon from "../images/instagram2.svg";
import linkedinIcon from "../images/linked.svg";
import upworkIcon from "../images/upwork.svg";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SocialIcons = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true 
    });
  }, []);

  return (
    <div className="socialIcons">
      <div className="circle" data-aos="fade-down" data-aos-delay="0">
        <a href="mailto:gearmindsengineering@gmail.com">
          <img src={emailIcon} alt="Email Icon" className="icon" />
        </a>
      </div>
      <div className="circle" data-aos="fade-down" data-aos-delay="200">
        <a href="https://www.instagram.com/gearmindsengineering/">
          <img src={instagramIcon} alt="Instagram Icon" className="icon" />
        </a>
      </div>
      <div className="circle" data-aos="fade-down" data-aos-delay="400">
        <a href="https://www.linkedin.com/in/haris-osmanagic-bb0696208/">
          <img src={linkedinIcon} alt="LinkedIn Icon" className="icon" />
        </a>
      </div>
      <div className="circle" data-aos="fade-down" data-aos-delay="600">
        <a href="https://www.upwork.com/freelancers/hariso2">
          <img src={upworkIcon} alt="Upwork Icon" className="icon" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
