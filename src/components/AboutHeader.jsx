import PropTypes from "prop-types";
import styles from "./AboutHeader.module.css";

const AboutHeader = ({ className = "" }) => {
  return (
    <div className={[styles.aboutHeader, className].join(" ")}>
      <h1 className={styles.healthcareTechnologyManagemeContainer}>
        <p className={styles.trackAndManage}>TRACK AND MANAGE</p>
        <p className={styles.trackAndManage}> YOUR ASSETS</p>
      </h1>
    </div>
  );
};

AboutHeader.propTypes = {
  className: PropTypes.string,
};

export default AboutHeader;
