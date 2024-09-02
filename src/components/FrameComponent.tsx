import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Card from "./Card";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  titleGoesHere?: string;
  titleGoesHere1?: string;
  secondaryText?: string;
  secondaryText1?: string;
  rectangle18?: string;
  rectangle181?: string;
  loremIpsumDolorSitAmetConsecte?: string;
  loremIpsumDolorSitAmetConsecte1?: string;
  propFlex?: string;
  propFlex1?: string;
  propAlignSelf?: string;
  propAlignSelf1?: string;
  propWidth?: string;
  propWidth1?: string;
  propMarginLeft?: string;
  propMarginLeft1?: string;
  propMarginBottom?: string;
  propMarginBottom1?: string;
  propHeight?: string;
  propHeight1?: string;
  propPadding1?: string;
  propPadding2?: string;
  propHeight11?: string;
  propHeight12?: string;
  propMinWidth?: string;
  propMinWidth1?: string;
  propPadding11?: string;
  propPadding12?: string;
  propAlignSelf11?: string;
  propAlignSelf12?: string;
  propAlignSelf2?: string;
  propAlignSelf21?: string;
  propFlex11?: string;
  propFlex12?: string;
  propHeight2?: string;
  propHeight21?: string;
  propDisplay?: string;
  propDisplay1?: string;
  propAlignSelf3?: string;
  propAlignSelf31?: string;
  propFlex2?: string;
  propFlex21?: string;
  propFlex3?: string;
  propFlex31?: string;
  propAlignSelf4?: string;
  propAlignSelf41?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  propPadding,
  titleGoesHere,
  titleGoesHere1,
  secondaryText,
  secondaryText1,
  rectangle18,
  rectangle181,
  loremIpsumDolorSitAmetConsecte,
  loremIpsumDolorSitAmetConsecte1,
  propFlex,
  propFlex1,
  propAlignSelf,
  propAlignSelf1,
  propWidth,
  propWidth1,
  propMarginLeft,
  propMarginLeft1,
  propMarginBottom,
  propMarginBottom1,
  propHeight,
  propHeight1,
  propPadding1,
  propPadding2,
  propHeight11,
  propHeight12,
  propMinWidth,
  propMinWidth1,
  propPadding11,
  propPadding12,
  propAlignSelf11,
  propAlignSelf12,
  propAlignSelf2,
  propAlignSelf21,
  propFlex11,
  propFlex12,
  propHeight2,
  propHeight21,
  propDisplay,
  propDisplay1,
  propAlignSelf3,
  propAlignSelf31,
  propFlex2,
  propFlex21,
  propFlex3,
  propFlex31,
  propAlignSelf4,
  propAlignSelf41,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.card4Parent, className].join(" ")}
      style={frameDivStyle}
    >
      <Card
        propFlex={propFlex}
        propAlignSelf={propAlignSelf}
        propWidth={propWidth}
        propMarginLeft={propMarginLeft}
        propMarginBottom={propMarginBottom}
        propHeight={propHeight}
        propPadding={propPadding1}
        propHeight1={propHeight11}
        propMinWidth={propMinWidth}
        propPadding1={propPadding11}
        propAlignSelf1={propAlignSelf11}
        titleGoesHere={titleGoesHere}
        propAlignSelf2={propAlignSelf2}
        propFlex1={propFlex11}
        secondaryText={secondaryText}
        propHeight2={propHeight2}
        propDisplay={propDisplay}
        propAlignSelf3={propAlignSelf3}
        rectangle18={rectangle18}
        propFlex2={propFlex2}
        propFlex3={propFlex3}
        loremIpsumDolorSitAmetConsecte={loremIpsumDolorSitAmetConsecte}
        propAlignSelf4={propAlignSelf4}
        button="Create Job Card"
        commonButtonBoxShadow="unset"
        commonButtonBackground="unset"
        commonButtonPadding="12px"
        commonButtonWidth="unset"
        commonButtonFilter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        buttonColor="unset"
        buttonMinWidth="unset"
        buttonFlex="unset"
        buttonBackground="linear-gradient(#2eff1b, #2eff1b), linear-gradient(#2335fd, #2335fd), #2335fd"
        buttonWebkitBackgroundClip="unset"
        buttonWebkitTextFillColor="unset"
      />
      <div className={styles.card7Wrapper}>
        <Card
          propFlex={propFlex1}
          propAlignSelf={propAlignSelf1}
          propWidth={propWidth1}
          propMarginLeft={propMarginLeft1}
          propMarginBottom={propMarginBottom1}
          propHeight={propHeight1}
          propPadding={propPadding2}
          propHeight1={propHeight12}
          propMinWidth={propMinWidth1}
          propPadding1={propPadding12}
          propAlignSelf1={propAlignSelf12}
          titleGoesHere={titleGoesHere1}
          propAlignSelf2={propAlignSelf21}
          propFlex1={propFlex12}
          secondaryText={secondaryText1}
          propHeight2={propHeight21}
          propDisplay={propDisplay1}
          propAlignSelf3={propAlignSelf31}
          rectangle18={rectangle181}
          propFlex2={propFlex21}
          propFlex3={propFlex31}
          loremIpsumDolorSitAmetConsecte={loremIpsumDolorSitAmetConsecte1}
          propAlignSelf4={propAlignSelf41}
          button="Log activity"
          commonButtonBoxShadow="unset"
          commonButtonBackground="unset"
          commonButtonPadding="12px"
          commonButtonWidth="202px"
          commonButtonFilter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
          buttonColor="unset"
          buttonMinWidth="unset"
          buttonFlex="1"
          buttonBackground="linear-gradient(#2eff1b, #2eff1b), linear-gradient(#2335fd, #2335fd), #2335fd"
          buttonWebkitBackgroundClip="unset"
          buttonWebkitTextFillColor="unset"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
