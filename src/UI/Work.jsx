import styles from "../styles/Work.module.css";
import { NavLink } from "react-router-dom";
import Album from "./Album";
import Animations from "./Animations";
import { photos2D, photos3D } from "../data/imageRepo";
import ContactWhite from "./ContactWhite";

const Work = () => {
  return (
    <div className={styles.workContainer}>
      <NavLink to={"/"}>
        <button className={styles.backButton}>BACK</button>
      </NavLink>
      <h2 className={styles.title}>2D DRAWINGS</h2>
      <Album d={"2D"} workPhotos={photos2D} />
      <hr className={styles.divider} />
      <h2 className={styles.title}>3D IMAGES</h2>
      <Album d={"3D"} workPhotos={photos3D} />
      <hr className={styles.divider} />
      <h2 className={styles.title}>Animations</h2>
      <Animations />
      <ContactWhite />
    </div>
  );
};

export default Work;
