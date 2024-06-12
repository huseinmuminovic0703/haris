import styles from "../styles/Photo.module.css";
import PhotoAlbum from "react-photo-album";
import { useState } from "react";
import WorkImage from "./WorkImage";

// eslint-disable-next-line react/prop-types
const Album = ({ workPhotos , d }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const openLightbox = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  return (
    <>
      <div className={styles.photoAlbum}>
        <PhotoAlbum
          layout="rows"
          photos={workPhotos}
          onClick={(event) => openLightbox(event.index)}
          columns={(containerWidth) => {
            if (containerWidth < 600) return 1;
            if (containerWidth < 900) return 2;
            return 3;
          }}
        />
        {isOpen && <WorkImage d={d} currentImage={currentImage} onClose={() => setIsOpen(false)} />}
      </div>
    </>
  );
};

export default Album;
