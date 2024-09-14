import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./LinksLogo.module.css";

const LinksLogo = ({
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
  onHomeLinkContainerClick,
  onRegisterTextClick,
  onHomeLinkContainerClick1,
}) => {
  const linksLogoStyle = useMemo(() => {
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

  const homeStyle = useMemo(() => {
    return {
      minWidth: homeMinWidth,
    };
  }, [homeMinWidth]);

  const aboutStyle = useMemo(() => {
    return {
      minWidth: aboutMinWidth,
    };
  }, [aboutMinWidth]);

  const loginStyle = useMemo(() => {
    return {
      minWidth: loginMinWidth,
    };
  }, [loginMinWidth]);

  const homeLinkStyle = useMemo(() => {
    return {
      overflow: homeLinkOverflow,
      width: homeLinkWidth2,
    };
  }, [homeLinkOverflow, homeLinkWidth2]);

  const headerLinksStyle = useMemo(() => {
    return {
      height: headerLinksHeight,
      position: headerLinksPosition,
      width: headerLinksWidth,
    };
  }, [headerLinksHeight, headerLinksPosition, headerLinksWidth]);

  const linksStyle = useMemo(() => {
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

  const homeLink1Style = useMemo(() => {
    return {
      flex: homeLinkFlex,
    };
  }, [homeLinkFlex]);

  const homeLink2Style = useMemo(() => {
    return {
      flex: homeLinkFlex1,
      width: homeLinkWidth,
    };
  }, [homeLinkFlex1, homeLinkWidth]);

  const homeLink3Style = useMemo(() => {
    return {
      flex: homeLinkFlex2,
    };
  }, [homeLinkFlex2]);

  const homeLink4Style = useMemo(() => {
    return {
      width: homeLinkWidth1,
    };
  }, [homeLinkWidth1]);

  const registerStyle = useMemo(() => {
    return {
      display: registerDisplay,
      minWidth: registerMinWidth,
      width: registerWidth,
    };
  }, [registerDisplay, registerMinWidth, registerWidth]);

  const contactStyle = useMemo(() => {
    return {
      display: contactDisplay,
      minWidth: contactMinWidth,
      width: contactWidth,
    };
  }, [contactDisplay, contactMinWidth, contactWidth]);

  const navigate = useNavigate();

  const onHomeLinkContainerClick2 = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutSecContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRegisterTextClick1 = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onHomeLinkContainerClick3 = useCallback(() => {
    navigate("/sign-up1");
  }, [navigate]);

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
          <div
            className={styles.homeLink1}
            onClick={onHomeLinkContainerClick}
            style={homeLink2Style}
          >
            <a className={styles.home} style={aboutStyle}>
              About
            </a>
          </div>
          <div className={styles.homeLink2} style={homeLink4Style}>
            <a
              className={styles.register}
              onClick={onRegisterTextClick}
              style={registerStyle}
            >
              Register
            </a>
          </div>
          <div
            className={styles.homeLink3}
            onClick={onHomeLinkContainerClick1}
            style={homeLink3Style}
          >
            <a className={styles.home} style={loginStyle}>
              Login
            </a>
          </div>
          <div className={styles.homeLink4} style={homeLinkStyle}>
            <a className={styles.home} style={contactStyle}>
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

LinksLogo.propTypes = {
  className: PropTypes.string,

  /** Style props */
  linksLogoWidth: PropTypes.any,
  linksLogoAlignSelf: PropTypes.any,
  linksLogoPadding: PropTypes.any,
  homeMinWidth: PropTypes.any,
  aboutMinWidth: PropTypes.any,
  loginMinWidth: PropTypes.any,
  linksLogoGap: PropTypes.any,
  linksLogoFlex: PropTypes.any,
  homeLinkOverflow: PropTypes.any,
  headerLinksHeight: PropTypes.any,
  headerLinksPosition: PropTypes.any,
  linksMargin: PropTypes.any,
  linksPosition: PropTypes.any,
  linksTop: PropTypes.any,
  linksLeft: PropTypes.any,
  linksGap: PropTypes.any,
  linksHeight: PropTypes.any,
  linksAlignSelf: PropTypes.any,
  homeLinkFlex: PropTypes.any,
  homeLinkFlex1: PropTypes.any,
  homeLinkWidth: PropTypes.any,
  homeLinkFlex2: PropTypes.any,
  linksRight: PropTypes.any,
  headerLinksWidth: PropTypes.any,
  homeLinkWidth1: PropTypes.any,
  registerDisplay: PropTypes.any,
  registerMinWidth: PropTypes.any,
  homeLinkWidth2: PropTypes.any,
  contactDisplay: PropTypes.any,
  contactMinWidth: PropTypes.any,
  contactWidth: PropTypes.any,
  registerWidth: PropTypes.any,

  /** Action props */
  onHomeLinkContainerClick: PropTypes.func,
  onRegisterTextClick: PropTypes.func,
  onHomeLinkContainerClick1: PropTypes.func,
};

export default LinksLogo;
