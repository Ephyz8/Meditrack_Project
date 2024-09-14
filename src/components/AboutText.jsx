import PropTypes from "prop-types";
import styles from "./AboutText.module.css";

const AboutText = ({ className = "" }) => {
  return (
    <div className={[styles.aboutText2, className].join(" ")}>
      <img
        className={styles.aboutText2Child}
        loading="lazy"
        alt=""
        src="/vector-3.svg"
      />
      <div className={styles.throughInnovativeTechnologyWrapper}>
        <div className={styles.throughInnovativeTechnology}>
          Through innovative technology, we aim to streamline equipment
          tracking, fault reporting, and maintenance processes, ultimately
          improving patient care and reducing equipment downtime.
        </div>
      </div>
    </div>
  );
};

AboutText.propTypes = {
  className: PropTypes.string,
};

export default AboutText;
