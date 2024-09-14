import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./CommonButton.module.css";

const CommonButton = ({
  className = "",
  commonButtonBoxShadow,
  commonButtonBackground,
  commonButtonPadding,
  commonButtonWidth,
  commonButtonFilter,
  button,
  buttonColor,
  buttonMinWidth,
  buttonFlex,
  buttonBackground,
  buttonWebkitBackgroundClip,
  buttonWebkitTextFillColor,
}) => {
  const commonButtonStyle = useMemo(() => {
    return {
      boxShadow: commonButtonBoxShadow,
      background: commonButtonBackground,
      padding: commonButtonPadding,
      width: commonButtonWidth,
      filter: commonButtonFilter,
    };
  }, [
    commonButtonBoxShadow,
    commonButtonBackground,
    commonButtonPadding,
    commonButtonWidth,
    commonButtonFilter,
  ]);

  const buttonStyle = useMemo(() => {
    return {
      color: buttonColor,
      minWidth: buttonMinWidth,
      flex: buttonFlex,
      background: buttonBackground,
      webkitBackgroundClip: buttonWebkitBackgroundClip,
      webkitTextFillColor: buttonWebkitTextFillColor,
    };
  }, [
    buttonColor,
    buttonMinWidth,
    buttonFlex,
    buttonBackground,
    buttonWebkitBackgroundClip,
    buttonWebkitTextFillColor,
  ]);

  return (
    <div
      className={[styles.commonButton, className].join(" ")}
      style={commonButtonStyle}
    >
      <div className={styles.button} style={buttonStyle}>
        {button}
      </div>
    </div>
  );
};

CommonButton.propTypes = {
  className: PropTypes.string,
  button: PropTypes.string,

  /** Style props */
  commonButtonBoxShadow: PropTypes.any,
  commonButtonBackground: PropTypes.any,
  commonButtonPadding: PropTypes.any,
  commonButtonWidth: PropTypes.any,
  commonButtonFilter: PropTypes.any,
  buttonColor: PropTypes.any,
  buttonMinWidth: PropTypes.any,
  buttonFlex: PropTypes.any,
  buttonBackground: PropTypes.any,
  buttonWebkitBackgroundClip: PropTypes.any,
  buttonWebkitTextFillColor: PropTypes.any,
};

export default CommonButton;
