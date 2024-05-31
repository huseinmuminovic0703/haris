/* eslint-disable react/no-unescaped-entities */
import classes from "../styles/Reading.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import scrollIcon from "../images/arrowwhite.svg";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const ReadingComponent = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  
  const scrollTheButton = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <main className={classes.container} id="readingComponent">
      <div
        onClick={() => scrollToSection("readingSec")}
        className={classes.scrollIndicator}
      >
      </div>
      <div className={classes.experience} id="readingSec" data-aos="fade-up">
        <h2 className={classes.h2} data-aos="fade-down">
          <strong>EXPERIENCE</strong>{" "}
        </h2>
        <br />
        <p className={classes.p3} data-aos="fade-in">
          <span>
            We stay ahead of the latest design and social trends to create product solutions that meet today's needs and anticipate tomorrow's.
          </span>
          <br />
          <span>
            Our mission is to stay on the cutting edge and provide our customers with the highest quality products.
          </span>
          <br />
        </p>
        <NavLink data-aos="zoom-in" to={"/work"}>
          <button onClick={scrollTheButton} className={classes.buttonExperience} >VIEW WORK</button>
        </NavLink>
        <div
          onClick={() => scrollToSection("whoweare")}
          className={classes.scrollIndicator}
          data-aos="fade-up"
        >
          <div className={classes.scrollCircle}>
            <svg className={classes.scrollIcon} viewBox="0 0 512 512">
              <use xlinkHref={`${scrollIcon}#Layer_1`}></use>
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReadingComponent;
