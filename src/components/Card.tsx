import { FunctionComponent, useMemo, type CSSProperties } from "react";
import CommonButton from "./CommonButton";
import styles from "./Card.module.css";

export type CardType = {
  className?: string;
  titleGoesHere?: string;
  secondaryText?: string;
  rectangle18?: string;
  loremIpsumDolorSitAmetConsecte?: string;
  button?: string;
  commonButtonBoxShadow?: string;
  commonButtonBackground?: string;
  commonButtonPadding?: string;
  commonButtonWidth?: string;
  commonButtonFilter?: string;
  buttonColor?: string;
  buttonMinWidth?: string;
  buttonFlex?: string;
  buttonBackground?: string;
  buttonWebkitBackgroundClip?: string;
  buttonWebkitTextFillColor?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propMarginLeft?: CSSProperties["marginLeft"];
  propMarginBottom?: CSSProperties["marginBottom"];
  propHeight?: CSSProperties["height"];
  propPadding?: CSSProperties["padding"];
  propHeight1?: CSSProperties["height"];
  propMinWidth?: CSSProperties["minWidth"];
  propPadding1?: CSSProperties["padding"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propFlex1?: CSSProperties["flex"];
  propHeight2?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
  propAlignSelf3?: CSSProperties["alignSelf"];
  propFlex2?: CSSProperties["flex"];
  propFlex3?: CSSProperties["flex"];
  propAlignSelf4?: CSSProperties["alignSelf"];
  titleTextFlex?: CSSProperties["flex"];
  titleTextWidth?: CSSProperties["width"];
  card8MinWidth?: CSSProperties["minWidth"];
  headerFlexWrap?: CSSProperties["flexWrap"];
  titleGoesHereHeight?: CSSProperties["height"];
  titleGoesHereDisplay?: CSSProperties["display"];
  bottomHeight?: CSSProperties["height"];
  card8Overflow?: CSSProperties["overflow"];
  rectangleIconHeight?: CSSProperties["height"];
  loremIpsumDolorTextAlign?: CSSProperties["textAlign"];
  loremIpsumDolorDisplay?: CSSProperties["display"];
};

const Card: FunctionComponent<CardType> = ({
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
}) => {
  const card8Style: CSSProperties = useMemo(() => {
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

  const headerStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      flexWrap: headerFlexWrap,
    };
  }, [propHeight1, headerFlexWrap]);

  const titleTextStyle: CSSProperties = useMemo(() => {
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

  const titleGoesHereStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
      flex: propFlex1,
      height: titleGoesHereHeight,
      display: titleGoesHereDisplay,
    };
  }, [propAlignSelf2, propFlex1, titleGoesHereHeight, titleGoesHereDisplay]);

  const secondaryTextStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight2,
      display: propDisplay,
      alignSelf: propAlignSelf3,
    };
  }, [propHeight2, propDisplay, propAlignSelf3]);

  const bottomStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex2,
      height: bottomHeight,
    };
  }, [propFlex2, bottomHeight]);

  const bottomTextStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex3,
    };
  }, [propFlex3]);

  const loremIpsumDolorStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf4,
      textAlign: loremIpsumDolorTextAlign,
      display: loremIpsumDolorDisplay,
    };
  }, [propAlignSelf4, loremIpsumDolorTextAlign, loremIpsumDolorDisplay]);

  const rectangleIconStyle: CSSProperties = useMemo(() => {
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

export default Card;