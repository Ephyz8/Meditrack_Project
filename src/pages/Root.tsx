import { FunctionComponent } from "react";
import ContentHeader from "../components/ContentHeader";
import AboutSec from "../components/AboutSec";
import AboutText1 from "../components/AboutText1";
import AboutText from "../components/AboutText";
import CardsContainer from "../components/CardsContainer";
import styles from "./Root.module.css";

const Root: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <section className={styles.content}>
        <img
          className={styles.contentHeaderIcon}
          alt=""
          src="/content-header@2x.png"
        />
      </section>
      <ContentHeader />
      <img
        className={styles.webLeftImage}
        loading="lazy"
        alt=""
        src="/web-left-image@2x.png"
      />
      <div className={styles.footer}>
        <div className={styles.aboutContentParent}>
          <div className={styles.aboutContent}>
            <AboutSec />
            <div className={styles.aboutHeader}>
              <h1 className={styles.healthcareTechnologyManagemeContainer}>
                <p className={styles.healthcareTechnology}>
                  HEALTHCARE TECHNOLOGY
                </p>
                <p className={styles.healthcareTechnology}>&nbsp;</p>
                <p className={styles.healthcareTechnology}>&nbsp;</p>
                <p className={styles.healthcareTechnology}>MANAGEMENT</p>
              </h1>
            </div>
          </div>
          <div className={styles.aboutDetails}>
            <div className={styles.aboutParagraph}>
              <AboutText1 />
              <div className={styles.subParagraph}>
                <AboutText />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardsContainer />
    </div>
  );
};

export default Root;
