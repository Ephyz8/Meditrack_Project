import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Component2.module.css";

const Component2 = ({
  className = "",
  propWidth,
  propMargin,
  propBottom,
  propLeft,
  propTop,
  propPosition,
  rectangle23,
  email,
  propHeight,
  propWidth1,
  propTop1,
  propLeft1,
  propMinWidth,
}) => {
  const component2Style = useMemo(() => {
    return {
      width: propWidth,
      margin: propMargin,
      bottom: propBottom,
      left: propLeft,
      top: propTop,
      position: propPosition,
    };
  }, [propWidth, propMargin, propBottom, propLeft, propTop, propPosition]);

  const emailStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth1,
      top: propTop1,
      left: propLeft1,
      minWidth: propMinWidth,
    };
  }, [propHeight, propWidth1, propTop1, propLeft1, propMinWidth]);

  return (
    <div
      className={[styles.component2, className].join(" ")}
      style={component2Style}
    >
      <img
        className={styles.component2Child}
        loading="lazy"
        alt=""
        src={rectangle23}
      />
      <div className={styles.email} style={emailStyle}>
        {email}
      </div>
    </div>
  );
};

Component2.propTypes = {
  className: PropTypes.string,
  rectangle23: PropTypes.string,
  email: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMargin: PropTypes.any,
  propBottom: PropTypes.any,
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
  propPosition: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth1: PropTypes.any,
  propTop1: PropTypes.any,
  propLeft1: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Component2;
