import { FunctionComponent } from "react";
import styles from "./AboutSec.module.css";

export type AboutSecType = {
  className?: string;
};

const AboutSec: FunctionComponent<AboutSecType> = ({ className = "" }) => {
  return (
    <div className={[styles.aboutSec, className].join(" ")}>
      <img
        className={styles.aboutIllustrationIcon}
        loading="lazy"
        alt=""
        src="/vector-2.svg"
      />
      <h2 className={styles.aboutMeditrackPro}>About MediTrack Pro</h2>
    </div>
  );
};

export default AboutSec;
