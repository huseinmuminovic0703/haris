import styles from "../styles/VideoModal.module.css";

// eslint-disable-next-line react/prop-types
const VideoModal = ({ videoSrc, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeButton}>
          X
        </button>
        <video src={videoSrc} controls autoPlay className={styles.modalVideo} />
      </div>
    </div>
  );
};

export default VideoModal;