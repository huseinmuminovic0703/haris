import styles from "../styles/WorkImage.module.css";
import { photos2D, photos3D } from "../data/imageRepo";

// eslint-disable-next-line react/prop-types
const WorkImage = ({ d, currentImage, onClose }) => {
  let currentPhoto;
  if (d === "2D") {
    currentPhoto = photos2D[currentImage];
  } else if (d === "3D") {
    currentPhoto = photos3D[currentImage];
  }

  const handleButton = () => {
    onClose();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={handleButton} className={styles.close}>
          X
        </button>
        {currentPhoto && (
          <img
            src={currentPhoto.src}
            alt="Work Image"
            className={styles.modalImage}
          />
        )}
      </div>
    </div>
  );
};

export default WorkImage;
