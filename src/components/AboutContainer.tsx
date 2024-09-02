import { FunctionComponent, useMemo, type CSSProperties } from "react";
import AboutSec from "./AboutSec";
import AboutText1 from "./AboutText1";
import AboutText from "./AboutText";
import styles from "./AboutContainer.module.css";

export type AboutContainerType = {
  className?: string;

  /** Style props */
  aboutContainerPosition?: CSSProperties["position"];
  aboutContainerAlignSelf?: CSSProperties["alignSelf"];
};

const AboutContainer: FunctionComponent<AboutContainerType> = ({
  className = "",
  aboutContainerPosition,
  aboutContainerAlignSelf,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      position: aboutContainerPosition,
      alignSelf: aboutContainerAlignSelf,
    };
  }, [aboutContainerPosition, aboutContainerAlignSelf]);

  return (
    <div
      className={[styles.frameWrapper, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.frameParent}>
        <div className={styles.webLeftImageWrapper}>
          <img
            className={styles.webLeftImage}
            loading="lazy"
            alt=""
            src="/web-left-image@2x.png"
          />
        </div>
        <div className={styles.aboutDetails}>
          <div className={styles.aboutSecWrapper}>
            <AboutSec />
          </div>
          <div className={styles.aboutHeader}>
            <h2 className={styles.healthcareTechnologyManagemeContainer}>
              <p className={styles.healthcareTechnology}>
                HEALTHCARE TE
                <span className={styles.c}>C</span>HNOLOGY
              </p>
              <p className={styles.healthcareTechnology}>&nbsp;</p>
              <p className={styles.healthcareTechnology}>MANAGEMENT</p>
            </h2>
          </div>
          <AboutText1 />
          <div className={styles.technologyFocus}>
            <AboutText />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
