import { FunctionComponent } from "react";
import styles from "./AboutText.module.css";

export type AboutTextType = {
  className?: string;
};

const AboutText: FunctionComponent<AboutTextType> = ({ className = "" }) => {
  return (
    <div className={[styles.aboutText2, className].join(" ")}>
      <img
        className={styles.subParagraphIcon}
        loading="lazy"
        alt=""
        src="/vector-3.svg"
      />
      <div className={styles.subParagraphContent}>
        <div className={styles.throughInnovativeTechnology}>
          Through innovative technology, we aim to streamline equipment
          tracking, fault reporting, and maintenance processes, ultimately
          improving patient care and reducing equipment downtime.
        </div>
      </div>
    </div>
  );
};

export default AboutText;
