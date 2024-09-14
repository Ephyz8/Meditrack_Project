import PropTypes from "prop-types";
import styles from "./AboutSec.module.css";

const AboutSec = ({ className = "" }) => {
  return (
    <div
      className={[styles.aboutSec, className].join(" ")}
      data-scroll-to="aboutSecContainer"
    >
      <div className={styles.aboutMediTrackIcon}>
        <img
          className={styles.aboutSubtitleIcon}
          loading="lazy"
          alt=""
          src="/vector-2.svg"
        />
      </div>
      <h2 className={styles.aboutMeditrackPro}>About MediTrack Pro</h2>
    </div>
  );
};

AboutSec.propTypes = {
  className: PropTypes.string,
};

export default AboutSec;
