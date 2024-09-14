import PropTypes from "prop-types";
import styles from "./WebLeftImage.module.css";

const WebLeftImage1 = ({ className = "" }) => {
  return <div className={[styles.webLeftImage, className].join(" ")} />;
};

WebLeftImage1.propTypes = {
  className: PropTypes.string,
};

export default WebLeftImage1;
