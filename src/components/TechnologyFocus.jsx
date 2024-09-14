import { useMemo } from "react";
import AboutSec from "./AboutSec";
import AboutText1 from "./AboutText1";
import AboutText from "./AboutText";
import PropTypes from "prop-types";
import styles from "./TechnologyFocus.module.css";

const TechnologyFocus = ({
  className = "",
  technologyFocusPosition,
  technologyFocusAlignSelf,
}) => {
  const frameDivStyle = useMemo(() => {
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

TechnologyFocus.propTypes = {
  className: PropTypes.string,

  /** Style props */
  technologyFocusPosition: PropTypes.any,
  technologyFocusAlignSelf: PropTypes.any,
};

export default TechnologyFocus;
