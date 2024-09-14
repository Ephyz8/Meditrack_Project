import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  className = "",
  propPadding,
  propPosition,
  propTop,
  propLeft,
  propHeight,
  propWidth,
  forgetPassword,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
      position: propPosition,
      top: propTop,
      left: propLeft,
      height: propHeight,
      width: propWidth,
    };
  }, [propPadding, propPosition, propTop, propLeft, propHeight, propWidth]);

  return (
    <div
      className={[styles.forgetPasswordWrapper, className].join(" ")}
      style={frameDiv1Style}
    >
      <div className={styles.forgetPassword}>{forgetPassword}</div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  forgetPassword: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FrameComponent1;
