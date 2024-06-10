import scrollIcon from "../images/icons/whitearrow.png";
import classes from "../styles/Aboutus.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const scrollTheButton = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const fixedCubePositions = [
    { top: "20%", left: "10%" },
    { top: "45%", left: "13%" },
    { top: "20%", left: "80%" },
    { top: "75%", left: "70%" },
    { top: "60%", left: "80%" },
    { top: "35%", left: "90%" },
    { top: "80%", left: "20%" },
    { top: "30%", left: "8%" },
    { top: "50%", left: "12%" },
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
    <div className={classes.aboutus} id="whoweare">
      <h1 className={classes.aboutush1} data-aos="fade-down">
        Who we are
      </h1>
      <h2 className={classes.aboutush2} data-aos="fade-in">
        <span>
          Welcome to the captivating world of cutting-edge creativity, where
          imagination knows no bounds!
        </span>
        <span>
          At GearMinds Engineering, we are not just another 3D design agency; we
          are the vanguards of innovation,
        </span>
        <span>
          pushing the boundaries of what is possible in the realm of
          three-dimensional artistry.
        </span>
        <span>
          In an era defined by stunning visuals and immersive experiences, our
          agency stands tall as a beacon of
        </span>
        <span>
          unparalleled expertise and unwavering passion. We exist to transform
          ideas into tangible realities, bringing
        </span>
        <span>
          concepts to life with meticulous precision and artistic flair.
        </span>
        <NavLink data-aos="zoom-in" to={"/more"}>
          <button onClick={scrollTheButton} className={classes.viewButton}>
            VIEW MORE
          </button>
        </NavLink>
      </h2>
      <div
        onClick={() => scrollToSection("imagesSec")}
        className={classes.scrollIndicatorView}
        data-aos="fade-up"
      >
        <div className={classes.scrollCircleView}>
            <img src={scrollIcon} className={classes.scrollIconView} alt="" />
        </div>
      </div>
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

export default About;
