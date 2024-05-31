import styles from "../styles/Header.module.css";
import headerImage from "../images/realLogo.png";
import scrollIcon from "../images/arowblack.svg";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
   const fixedCubePositions = [
    { top: "20%", left: "10%" },
    { top: "45%", left: "13%" },
    { top: "20%", left: "80%" },
    { top: "75%", left: "70%" },
    { top: "60%", left: "80%" },
    { top: "35%", left: "73%" },
    { top: "80%", left: "20%" },
    { top: "30%", left: "8%" },
    { top: "50%", left: "20%" },
    { top: "32%", left: "87%" },
    { top: "15%", left: "85%" },
    { top: "65%", left: "85%" },
    { top: "75%", left: "65%" },
    { top: "85%", left: "35%" },
  ];

  const [visibleGroup, setVisibleGroup] = useState(1);
    useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleGroup((prevGroup) => (prevGroup === 1 ? 2 : 1));
    }, 1150);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header  data-aos="fade-down"  className={styles.header}>
        <a href="#">
          <img className={styles.headerImage} src={headerImage} alt="Header" />
        </a>
        <h1>
          <span className={styles.p}>
            It all starts
            <br />
            with an idea
          </span>
        </h1>
        <p className={styles.p2}>
          A Bosnia and Herzegovina-based product design and engineering
          consultancy dedicated to developing purposeful products.
        </p>
        <div
          className={styles.scrollIndicator}
          onClick={() => scrollToSection("readingComponent")}
        >
          <div className={styles.scrollCircle}>
            <svg className={styles.scrollIcon} viewBox="0 0 512 512">
              <use xlinkHref={scrollIcon + "#Layer_1"}></use>
            </svg>
          </div>
        </div>
         <div className={styles.backgroundCubes}>
        {fixedCubePositions.map((position, index) => {
          const isVisible =
            (visibleGroup === 1 && index < 7) ||
            (visibleGroup === 2 && index >= 7);

          return (
            <div
              key={index}
              className={`${styles.cube} ${
                isVisible ? styles.grow : styles.shrink
              }`}
              style={position}
            ></div>
          );
        })}
      </div>
      </header>
    </>
  );
};

export default Header;
