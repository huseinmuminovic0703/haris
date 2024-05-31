/* eslint-disable react/no-unescaped-entities */
import styles from "../styles/More.module.css";
import { NavLink } from "react-router-dom";
import SocialIcons from "./SocialIcons";

const More = () => {
  return ( 
    <div className={styles.moreContainer}>
      <NavLink to={"/"}>
        <button className={styles.backButton}>BACK</button>
      </NavLink>
      <p className={styles.text}>With a team of brilliant minds hailing from diverse disciplines, we merge art, technology, and design to deliver awe-inspiring creations that captivate audiences and leave lasting impressions. Our agency's dynamic approach seamlessly blends the realms of virtual and physical worlds, redefining the very essence of visual storytelling.</p>
      <p className={styles.text}>Whether you require architectural visualizations that transport viewers to future landscapes, product renderings that elevate your brand's presence, or jaw-dropping animations that breathe life into your marketing campaigns, we have the expertise and vision to turn your dreams into tangible masterpieces.</p>
      <p className={styles.text}>But it's not just about the end result; we believe in nurturing collaborative partnerships with our clients. We listen intently to your goals, dive deep into your brand's essence, and work hand-in-hand to craft customized solutions that exceed your expectations. We take pride in our ability to transform your vision into a vivid reality, meticulously paying attention to the smallest details to ensure an unparalleled level of excellence.</p>
      <p className={styles.text}>Our expertise extends to programs such as Solidworks, SketchUp, AutoCAD, Blender and more. We have spent significant time honing our skills on each of these platforms, mastering their interfaces, tools and workflows.</p>
      <p className={styles.text}>Join us on a journey where creativity reigns supreme, where the impossible becomes possible, and where the art of 3D design becomes a captivating experience. At GearMinds Engineering, we invite you to witness the power of imagination, brought to life with precision, passion, and a touch of magic.</p>
       <div className={styles.socialIconDiv}>
         <SocialIcons></SocialIcons>
       </div>
    </div>
  );
};

export default More;
