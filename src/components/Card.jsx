import { useMemo } from "react";
import CommonButton from "./CommonButton";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({
  className = "",
  propFlex,
  propAlignSelf,
  propWidth,
  propMarginLeft,
  propMarginBottom,
  propHeight,
  propPadding,
  propHeight1,
  propMinWidth,
  propPadding1,
  propAlignSelf1,
  titleGoesHere,
  propAlignSelf2,
  propFlex1,
  secondaryText,
  propHeight2,
  propDisplay,
  propAlignSelf3,
  rectangle18,
  propFlex2,
  propFlex3,
  loremIpsumDolorSitAmetConsecte,
  propAlignSelf4,
  button,
  commonButtonBoxShadow,
  commonButtonBackground,
  commonButtonPadding,
  commonButtonWidth,
  commonButtonFilter,
  buttonColor,
  buttonMinWidth,
  buttonFlex,
  buttonBackground,
  buttonWebkitBackgroundClip,
  buttonWebkitTextFillColor,
  titleTextFlex,
  titleTextWidth,
  card8MinWidth,
  headerFlexWrap,
  titleGoesHereHeight,
  titleGoesHereDisplay,
  bottomHeight,
  card8Overflow,
  rectangleIconHeight,
  loremIpsumDolorTextAlign,
  loremIpsumDolorDisplay,
  secondaryTextWidth,
}) => {
  const card8Style = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
      width: propWidth,
      marginLeft: propMarginLeft,
      marginBottom: propMarginBottom,
      height: propHeight,
      padding: propPadding,
      minWidth: card8MinWidth,
      overflow: card8Overflow,
    };
  }, [
    propFlex,
    propAlignSelf,
    propWidth,
    propMarginLeft,
    propMarginBottom,
    propHeight,
    propPadding,
    card8MinWidth,
    card8Overflow,
  ]);

  const headerStyle = useMemo(() => {
    return {
      height: propHeight1,
      flexWrap: headerFlexWrap,
    };
  }, [propHeight1, headerFlexWrap]);

  const titleTextStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      padding: propPadding1,
      alignSelf: propAlignSelf1,
      flex: titleTextFlex,
      width: titleTextWidth,
    };
  }, [
    propMinWidth,
    propPadding1,
    propAlignSelf1,
    titleTextFlex,
    titleTextWidth,
  ]);

  const titleGoesHereStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
      flex: propFlex1,
      height: titleGoesHereHeight,
      display: titleGoesHereDisplay,
    };
  }, [propAlignSelf2, propFlex1, titleGoesHereHeight, titleGoesHereDisplay]);

  const secondaryTextStyle = useMemo(() => {
    return {
      height: propHeight2,
      display: propDisplay,
      alignSelf: propAlignSelf3,
      width: secondaryTextWidth,
    };
  }, [propHeight2, propDisplay, propAlignSelf3, secondaryTextWidth]);

  const bottomStyle = useMemo(() => {
    return {
      flex: propFlex2,
      height: bottomHeight,
    };
  }, [propFlex2, bottomHeight]);

  const bottomTextStyle = useMemo(() => {
    return {
      flex: propFlex3,
    };
  }, [propFlex3]);

  const loremIpsumDolorStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf4,
      textAlign: loremIpsumDolorTextAlign,
      display: loremIpsumDolorDisplay,
    };
  }, [propAlignSelf4, loremIpsumDolorTextAlign, loremIpsumDolorDisplay]);

  const rectangleIconStyle = useMemo(() => {
    return {
      height: rectangleIconHeight,
    };
  }, [rectangleIconHeight]);

  return (
    <div className={[styles.card8, className].join(" ")} style={card8Style}>
      <div className={styles.header} style={headerStyle}>
        <img
          className={styles.headerChild}
          loading="lazy"
          alt=""
          src="/ellipse-1@2x.png"
        />
        <div className={styles.titleText} style={titleTextStyle}>
          <b className={styles.titleGoesHere} style={titleGoesHereStyle}>
            {titleGoesHere}
          </b>
          <div className={styles.secondaryText} style={secondaryTextStyle}>
            {secondaryText}
          </div>
        </div>
      </div>
      <img
        className={styles.card8Child}
        loading="lazy"
        alt=""
        src={rectangle18}
        style={rectangleIconStyle}
      />
      <div className={styles.bottom} style={bottomStyle}>
        <div className={styles.bottomText} style={bottomTextStyle}>
          <div className={styles.loremIpsumDolor} style={loremIpsumDolorStyle}>
            {loremIpsumDolorSitAmetConsecte}
          </div>
        </div>
        <CommonButton
          commonButtonBoxShadow={commonButtonBoxShadow}
          commonButtonBackground={commonButtonBackground}
          commonButtonPadding={commonButtonPadding}
          commonButtonWidth={commonButtonWidth}
          commonButtonFilter={commonButtonFilter}
          button={button}
          buttonColor={buttonColor}
          buttonMinWidth={buttonMinWidth}
          buttonFlex={buttonFlex}
          buttonBackground={buttonBackground}
          buttonWebkitBackgroundClip={buttonWebkitBackgroundClip}
          buttonWebkitTextFillColor={buttonWebkitTextFillColor}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  titleGoesHere: PropTypes.string,
  secondaryText: PropTypes.string,
  rectangle18: PropTypes.string,
  loremIpsumDolorSitAmetConsecte: PropTypes.string,
  button: PropTypes.string,
  commonButtonBoxShadow: PropTypes.string,
  commonButtonBackground: PropTypes.string,
  commonButtonPadding: PropTypes.string,
  commonButtonWidth: PropTypes.string,
  commonButtonFilter: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonMinWidth: PropTypes.string,
  buttonFlex: PropTypes.string,
  buttonBackground: PropTypes.string,
  buttonWebkitBackgroundClip: PropTypes.string,
  buttonWebkitTextFillColor: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propMarginLeft: PropTypes.any,
  propMarginBottom: PropTypes.any,
  propHeight: PropTypes.any,
  propPadding: PropTypes.any,
  propHeight1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propPadding1: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propAlignSelf2: PropTypes.any,
  propFlex1: PropTypes.any,
  propHeight2: PropTypes.any,
  propDisplay: PropTypes.any,
  propAlignSelf3: PropTypes.any,
  propFlex2: PropTypes.any,
  propFlex3: PropTypes.any,
  propAlignSelf4: PropTypes.any,
  titleTextFlex: PropTypes.any,
  titleTextWidth: PropTypes.any,
  card8MinWidth: PropTypes.any,
  headerFlexWrap: PropTypes.any,
  titleGoesHereHeight: PropTypes.any,
  titleGoesHereDisplay: PropTypes.any,
  bottomHeight: PropTypes.any,
  card8Overflow: PropTypes.any,
  rectangleIconHeight: PropTypes.any,
  loremIpsumDolorTextAlign: PropTypes.any,
  loremIpsumDolorDisplay: PropTypes.any,
  secondaryTextWidth: PropTypes.any,
};

export default Card;
