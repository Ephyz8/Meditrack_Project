import PropTypes from "prop-types";
import styles from "./WebLeftImage1.module.css";

const WebLeftImage = ({ className = "" }) => {
  return (
    <img
      className={[styles.webLeftImage, className].join(" ")}
      loading="lazy"
      alt=""
      src="/web-left-image@2x.png"
    />
  );
};

WebLeftImage.propTypes = {
  className: PropTypes.string,
};

export default WebLeftImage;
