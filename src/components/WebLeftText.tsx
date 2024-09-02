import { FunctionComponent } from "react";
import styles from "./WebLeftText.module.css";

export type WebLeftTextType = {
  className?: string;
};

const WebLeftText: FunctionComponent<WebLeftTextType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.webLeftText, className].join(" ")}>
      <div className={styles.mainHeader}>
        <h1 className={styles.meditrack}>
          <p className={styles.meditrack1}>MediTrack</p>
        </h1>
      </div>
      <div className={styles.heroImageIconParent}>
        <img
          className={styles.heroImageIcon}
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <div className={styles.dawnOfHopeWrapper}>
          <h1 className={styles.dawnOfHope}>Dawn of Hope</h1>
        </div>
      </div>
      <div className={styles.textAuto}>
        <div className={styles.designedToManage}>
          Designed to manage medical equipment in hospitals and facilitating
          equipment inventory management, fault reporting, job card creation,
          preventive maintenance scheduling, and daily routine work logging. It
          is tailored for both Medical Equipment Users and Biomedical Engineers,
          offering role-specific functionalities.
        </div>
      </div>
      <div className={styles.commonButton}>
        <div className={styles.button}>Get started</div>
      </div>
    </div>
  );
};

export default WebLeftText;