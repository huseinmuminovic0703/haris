import { useState } from "react";
import styles from "../styles/Animations.module.css";
import prvaAnimacija from "../videos/prvaAnimacija.mp4";
import drugaAnimacija from "../videos/drugaAnimacija.mp4";
import drugaSlikaAnimacije from "../images/animationsImg/prvaSlika.png";
import prvaSlikaAnimacije from "../images/animationsImg/drugaSlika.png";
import VideoModal from "./VideoModal";

const Animations = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const openModal = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentVideo("");
  };

  return (
    <div className={styles.videosContainer}>
      <div
        className={styles.videoThumbnail}
        onClick={() => openModal(prvaAnimacija)}
      >
        <video
          src={prvaAnimacija}
          poster={prvaSlikaAnimacije}
          className={styles.video}
        />
      </div>
      <div
        className={styles.videoThumbnail}
        onClick={() => openModal(drugaAnimacija)}
      >
        <video
          src={drugaAnimacija}
          poster={drugaSlikaAnimacije}
          className={styles.video}
        />
      </div>
      {isOpen && <VideoModal videoSrc={currentVideo} onClose={closeModal} />}
    </div>
  );
};
export default Animations;
