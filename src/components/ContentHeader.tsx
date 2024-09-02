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
    <section className={[styles.contentHeader, className].join(" ")}>
      <LinksLogo />
      <div className={styles.mainContent}>
        <WebLeftText />
        <div className={styles.mainImage}>
          <div className={styles.mainPic}>
            <img
              className={styles.mainPicChild}
              loading="lazy"
              alt=""
              src="/rectangle-19@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentHeader;
