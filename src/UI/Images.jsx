import gif1 from "../images/gifs/gif1.gif";
import gif2 from "../images/gifs/gif2.gif";
import gif3 from "../images/gifs/gif3.gif";
import gif4 from "../images/gifs/gif4.gif";
import scrollIcon from "../images/icons/blackarrow.png";
import classes from "../styles/Images.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Images = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
    useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const images = [
    { src: gif1, text: "Create a roadmap for your product that ensures your brand, company, products, and target audience are all in sync." },
    { src: gif2, text: "Refinement of concepts in CAD to create functional or visual models to validate features, sizing and construction." },
    { src: gif3, text: "Create a range of design ideas that meet specific requirements, with an emphasis on the shape, size, and technical aspects of the product." },
    { src: gif4, text: "Prototyping validates the functionality, usability, and feel of your designs, bringing your product to life and adding value." },
  ];

  return (
    <div  data-aos="fade-down" className={classes.imagesDiv} id="imagesSec">
      {images.map((img, index) => (
        <div className={classes.singleImage} key={index}>
          <img src={img.src} alt={`Image ${index + 1}`} />
          <p>{img.text}</p>
        </div>
      ))}
      <div onClick={() => scrollToSection("contactSec")} className={classes.scrollIndicator}>
        <div className={classes.scrollCircle}>
          <img src={scrollIcon} className={classes.scrollIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Images;
