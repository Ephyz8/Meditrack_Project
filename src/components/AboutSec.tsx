import { FunctionComponent } from "react";
import styles from "./AboutSec.module.css";

export type AboutSecType = {
  className?: string;
};

const AboutSec: FunctionComponent<AboutSecType> = ({ className = "" }) => {
  return (
    <div className={[styles.aboutSec, className].join(" ")}>
      <div className={styles.aboutSubtitleWrapper}>
        <img
          className={styles.aboutSubtitleIcon}
          loading="lazy"
          alt=""
          src="/vector-2.svg"
        />
      </div>
      <h2 className={styles.aboutMeditrackPro}>About MediTrack Pro</h2>
    </div>
  );
};

export default AboutSec;