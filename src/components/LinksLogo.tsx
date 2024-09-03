import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./LinksLogo.module.css";

export type LinksLogoType = {
  className?: string;

  /** Style props */
  linksLogoWidth?: CSSProperties["width"];
  linksLogoAlignSelf?: CSSProperties["alignSelf"];
  linksLogoPadding?: CSSProperties["padding"];
  homeMinWidth?: CSSProperties["minWidth"];
  aboutMinWidth?: CSSProperties["minWidth"];
  loginMinWidth?: CSSProperties["minWidth"];
  linksLogoGap?: CSSProperties["gap"];
  linksLogoFlex?: CSSProperties["flex"];
};

const LinksLogo: FunctionComponent<LinksLogoType> = ({
  className = "",
  linksLogoWidth,
  linksLogoAlignSelf,
  linksLogoPadding,
  homeMinWidth,
  aboutMinWidth,
  loginMinWidth,
  linksLogoGap,
  linksLogoFlex,
}) => {
  const linksLogoStyle: CSSProperties = useMemo(() => {
    return {
      width: linksLogoWidth,
      alignSelf: linksLogoAlignSelf,
      padding: linksLogoPadding,
      gap: linksLogoGap,
      flex: linksLogoFlex,
    };
  }, [
    linksLogoWidth,
    linksLogoAlignSelf,
    linksLogoPadding,
    linksLogoGap,
    linksLogoFlex,
  ]);

  const homeStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: homeMinWidth,
    };
  }, [homeMinWidth]);

  const aboutStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: aboutMinWidth,
    };
  }, [aboutMinWidth]);

  const loginStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: loginMinWidth,
    };
  }, [loginMinWidth]);

  return (
    <header
      className={[styles.linksLogo, className].join(" ")}
      style={linksLogoStyle}
    >
      <img
        className={styles.standardBankMalawiIconjpeg}
        loading="lazy"
        alt=""
        src="/standard-bank-malawi-iconjpeg@2x.png"
      />
      <div className={styles.headerLinks}>
        <div className={styles.links}>
          <div className={styles.homeLink}>
            <a className={styles.home} style={homeStyle}>
              Home
            </a>
          </div>
          <div className={styles.homeLink1}>
            <a className={styles.about} style={aboutStyle}>
              About
            </a>
          </div>
          <div className={styles.homeLink1}>
            <a className={styles.register}>Register</a>
          </div>
          <div className={styles.homeLink3}>
            <a className={styles.login} style={loginStyle}>
              Login
            </a>
          </div>
          <div className={styles.homeLink4}>
            <a className={styles.contact}>Contact</a>
          </div>
          <div className={styles.search}>
            <img
              className={styles.searchIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default LinksLogo;
