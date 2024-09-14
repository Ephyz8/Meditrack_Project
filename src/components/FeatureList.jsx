import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LinksLogo from "./LinksLogo";
import WebLeftText from "./WebLeftText";
import PropTypes from "prop-types";
import styles from "./FeatureList.module.css";

const FeatureList = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeLinkContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutSecContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRegisterTextClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onHomeLinkContainerClick1 = useCallback(() => {
    navigate("/sign-up1");
  }, [navigate]);

  return (
    <section className={[styles.featureList, className].join(" ")}>
      <div className={styles.linksLogoParent}>
        <LinksLogo
          onHomeLinkContainerClick={onHomeLinkContainerClick}
          onRegisterTextClick={onRegisterTextClick}
          onHomeLinkContainerClick1={onHomeLinkContainerClick1}
        />
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

FeatureList.propTypes = {
  className: PropTypes.string,
};

export default FeatureList;
