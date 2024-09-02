import { FunctionComponent } from "react";
import styles from "./LinksLogo.module.css";

export type LinksLogoType = {
  className?: string;
};

const LinksLogo: FunctionComponent<LinksLogoType> = ({ className = "" }) => {
  return (
    <div className={[styles.linksLogo, className].join(" ")}>
      <img
        className={styles.standardBankMalawiIconjpeg}
        loading="lazy"
        alt=""
        src="/standard-bank-malawi-iconjpeg@2x.png"
      />
      <div className={styles.headerLinks}>
        <div className={styles.links}>
          <div className={styles.homeLink}>
            <a className={styles.home}>Home</a>
          </div>
          <div className={styles.homeLink1}>
            <a className={styles.about}>About</a>
          </div>
          <div className={styles.homeLink2}>
            <a className={styles.register}>Register</a>
          </div>
          <div className={styles.homeLink3}>
            <a className={styles.login}>Login</a>
          </div>
          <div className={styles.homeLink4}>
            <a className={styles.contact}>Contact</a>
          </div>
          <div className={styles.search}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksLogo;
