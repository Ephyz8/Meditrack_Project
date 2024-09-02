import { FunctionComponent } from "react";
import styles from "./AboutHeader.module.css";

export type AboutHeaderType = {
  className?: string;
};

const AboutHeader: FunctionComponent<AboutHeaderType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.aboutHeader, className].join(" ")}>
      <h1 className={styles.healthcareTechnologyManagemeContainer}>
        <p className={styles.trackAndManage}>TRACK AND MANAGE</p>
        <p className={styles.trackAndManage}> YOUR ASSETS</p>
      </h1>
    </div>
  );
};

export default AboutHeader;
