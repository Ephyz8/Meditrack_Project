import { FunctionComponent } from "react";
import FeatureList from "../components/FeatureList";
import AboutSec from "../components/AboutSec";
import AboutText1 from "../components/AboutText1";
import AboutText from "../components/AboutText";
import CardContainer from "../components/CardContainer";
import styles from "./Root.module.css";

const Root1: FunctionComponent = () => {
  return (
    <div className={styles.main}>
      <FeatureList />
      <img
        className={styles.webLeftImage}
        loading="lazy"
        alt=""
        src="/web-left-image@2x.png"
      />
      <div className={styles.lowerContent}>
        <div className={styles.frameParent}>
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
          <div className={styles.aboutText2Wrapper}>
            <AboutText />
          </div>
        </div>
      </div>
      <CardContainer />
    </div>
  );
};

export default Root1;