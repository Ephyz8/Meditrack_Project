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
  homeLinkOverflow?: CSSProperties["overflow"];
  headerLinksHeight?: CSSProperties["height"];
  headerLinksPosition?: CSSProperties["position"];
  linksMargin?: CSSProperties["margin"];
  linksPosition?: CSSProperties["position"];
  linksTop?: CSSProperties["top"];
  linksLeft?: CSSProperties["left"];
  linksGap?: CSSProperties["gap"];
  linksHeight?: CSSProperties["height"];
  linksAlignSelf?: CSSProperties["alignSelf"];
  homeLinkFlex?: CSSProperties["flex"];
  homeLinkFlex1?: CSSProperties["flex"];
  homeLinkWidth?: CSSProperties["width"];
  homeLinkFlex2?: CSSProperties["flex"];
  linksRight?: CSSProperties["right"];
  headerLinksWidth?: CSSProperties["width"];
  homeLinkWidth1?: CSSProperties["width"];
  registerDisplay?: CSSProperties["display"];
  registerMinWidth?: CSSProperties["minWidth"];
  homeLinkWidth2?: CSSProperties["width"];
  contactDisplay?: CSSProperties["display"];
  contactMinWidth?: CSSProperties["minWidth"];
  contactWidth?: CSSProperties["width"];
  registerWidth?: CSSProperties["width"];
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
  homeLinkOverflow,
  headerLinksHeight,
  headerLinksPosition,
  linksMargin,
  linksPosition,
  linksTop,
  linksLeft,
  linksGap,
  linksHeight,
  linksAlignSelf,
  homeLinkFlex,
  homeLinkFlex1,
  homeLinkWidth,
  homeLinkFlex2,
  linksRight,
  headerLinksWidth,
  homeLinkWidth1,
  registerDisplay,
  registerMinWidth,
  homeLinkWidth2,
  contactDisplay,
  contactMinWidth,
  contactWidth,
  registerWidth,
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

  const homeLinkStyle: CSSProperties = useMemo(() => {
    return {
      overflow: homeLinkOverflow,
      width: homeLinkWidth2,
    };
  }, [homeLinkOverflow, homeLinkWidth2]);

  const headerLinksStyle: CSSProperties = useMemo(() => {
    return {
      height: headerLinksHeight,
      position: headerLinksPosition,
      width: headerLinksWidth,
    };
  }, [headerLinksHeight, headerLinksPosition, headerLinksWidth]);

  const linksStyle: CSSProperties = useMemo(() => {
    return {
      margin: linksMargin,
      position: linksPosition,
      top: linksTop,
      left: linksLeft,
      gap: linksGap,
      height: linksHeight,
      alignSelf: linksAlignSelf,
      right: linksRight,
    };
  }, [
    linksMargin,
    linksPosition,
    linksTop,
    linksLeft,
    linksGap,
    linksHeight,
    linksAlignSelf,
    linksRight,
  ]);

  const homeLink1Style: CSSProperties = useMemo(() => {
    return {
      flex: homeLinkFlex,
    };
  }, [homeLinkFlex]);

  const homeLink2Style: CSSProperties = useMemo(() => {
    return {
      flex: homeLinkFlex1,
      width: homeLinkWidth,
    };
  }, [homeLinkFlex1, homeLinkWidth]);

  const homeLink3Style: CSSProperties = useMemo(() => {
    return {
      flex: homeLinkFlex2,
    };
  }, [homeLinkFlex2]);

  const homeLink4Style: CSSProperties = useMemo(() => {
    return {
      width: homeLinkWidth1,
    };
  }, [homeLinkWidth1]);

  const registerStyle: CSSProperties = useMemo(() => {
    return {
      display: registerDisplay,
      minWidth: registerMinWidth,
      width: registerWidth,
    };
  }, [registerDisplay, registerMinWidth, registerWidth]);

  const contactStyle: CSSProperties = useMemo(() => {
    return {
      display: contactDisplay,
      minWidth: contactMinWidth,
      width: contactWidth,
    };
  }, [contactDisplay, contactMinWidth, contactWidth]);

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
      <div className={styles.headerLinks} style={headerLinksStyle}>
        <div className={styles.links} style={linksStyle}>
          <div className={styles.homeLink} style={homeLink1Style}>
            <a className={styles.home} style={homeStyle}>
              Home
            </a>
          </div>
          <div className={styles.homeLink1} style={homeLink2Style}>
            <a className={styles.about} style={aboutStyle}>
              About
            </a>
          </div>
          <div className={styles.homeLink1}>
            <a className={styles.register} style={homeStyle}>
              Register
            </a>
          </div>
          <div className={styles.homeLink2} style={homeLink3Style}>
            <a className={styles.login} style={loginStyle}>
              Login
            </a>
          </div>
          <div className={styles.homeLink4} style={homeLinkStyle}>
            <a className={styles.contact} style={contactStyle}>
              Contact
            </a>
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