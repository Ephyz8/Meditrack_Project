import { FunctionComponent } from "react";
import LinksLogo from "./LinksLogo";
import WebLeftText from "./WebLeftText";
import styles from "./ContentHeader.module.css";

export type ContentHeaderType = {
  className?: string;
};

const ContentHeader: FunctionComponent<ContentHeaderType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.nestedFeature, className].join(" ")}>
      <div className={styles.featureListParent}>
        <img
          className={styles.featureListIcon}
          alt=""
          src="/content-header@2x.png"
        />
        <div className={styles.mainPic}>
          <img
            className={styles.unsplash1csavdwfiewIcon}
            loading="lazy"
            alt=""
            src="/unsplash1csavdwfiew@2x.png"
          />
        </div>
      </div>
      <LinksLogo />
      <div className={styles.content}>
        <WebLeftText />
      </div>
    </div>
  );
};

export default ContentHeader;