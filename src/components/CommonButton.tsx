import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CommonButton.module.css";

export type CommonButtonType = {
  className?: string;
  button?: string;

  /** Style props */
  commonButtonBoxShadow?: CSSProperties["boxShadow"];
  commonButtonBackground?: CSSProperties["background"];
  commonButtonPadding?: CSSProperties["padding"];
  commonButtonWidth?: CSSProperties["width"];
  commonButtonFilter?: CSSProperties["filter"];
  buttonColor?: CSSProperties["color"];
  buttonMinWidth?: CSSProperties["minWidth"];
  buttonFlex?: CSSProperties["flex"];
  buttonBackground?: CSSProperties["background"];
  buttonWebkitBackgroundClip?: CSSProperties["webkitBackgroundClip"];
  buttonWebkitTextFillColor?: CSSProperties["webkitTextFillColor"];
};

const CommonButton: FunctionComponent<CommonButtonType> = ({
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
  const commonButtonStyle: CSSProperties = useMemo(() => {
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

  const buttonStyle: CSSProperties = useMemo(() => {
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

export default CommonButton;
