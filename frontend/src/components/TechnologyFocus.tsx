import { FunctionComponent, useMemo, type CSSProperties } from "react";
import AboutSec from "./AboutSec";
import AboutText1 from "./AboutText1";
import AboutText from "./AboutText";
import styles from "./TechnologyFocus.module.css";

export type TechnologyFocusType = {
  className?: string;

  /** Style props */
  technologyFocusPosition?: CSSProperties["position"];
  technologyFocusAlignSelf?: CSSProperties["alignSelf"];
};

const TechnologyFocus: FunctionComponent<TechnologyFocusType> = ({
  className = "",
  technologyFocusPosition,
  technologyFocusAlignSelf,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      position: technologyFocusPosition,
      alignSelf: technologyFocusAlignSelf,
    };
  }, [technologyFocusPosition, technologyFocusAlignSelf]);

  return (
    <div
      className={[styles.aboutContentWrapper, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.aboutContent}>
        <div className={styles.aboutTop}>
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
        <div className={styles.aboutText2Wrapper}>
          <AboutText />
        </div>
      </div>
    </div>
  );
};

export default TechnologyFocus;
