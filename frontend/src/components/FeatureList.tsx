import { FunctionComponent } from "react";
import LinksLogo from "./LinksLogo";
import WebLeftText from "./WebLeftText";
import styles from "./FeatureList.module.css";

export type FeatureListType = {
  className?: string;
};

const FeatureList: FunctionComponent<FeatureListType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.featureList, className].join(" ")}>
      <div className={styles.linksLogoParent}>
        <LinksLogo />
        <div className={styles.contentParent}>
          <div className={styles.content}>
            <WebLeftText />
          </div>
          <div className={styles.mainPicWrapper}>
            <div className={styles.mainPic}>
              <img
                className={styles.unsplash1csavdwfiewIcon}
                loading="lazy"
                alt=""
                src="/unsplash1csavdwfiew@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureList;
