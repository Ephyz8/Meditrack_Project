import { FunctionComponent } from "react";
import Card from "./Card";
import CardList from "./CardList";
import styles from "./CardContainer.module.css";

export type CardContainerType = {
  className?: string;
};

const CardContainer: FunctionComponent<CardContainerType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.cardContainer, className].join(" ")}>
      <Card
        propFlex="unset"
        propAlignSelf="unset"
        propWidth="354px"
        propMarginLeft="-442px"
        propMarginBottom="-521px"
        propHeight="528px"
        propPadding="unset"
        propHeight1="102px"
        propMinWidth="unset"
        propPadding1="0px 20px"
        propAlignSelf1="stretch"
        titleGoesHere="JOB CARD"
        propAlignSelf2="stretch"
        propFlex1="1"
        secondaryText="Document every step"
        propHeight2="24px"
        propDisplay="inline-block"
        propAlignSelf3="stretch"
        rectangle18="/rectangle-18@2x.png"
        propFlex2="1"
        propFlex3="1"
        loremIpsumDolorSitAmetConsecte="Document and monitor all maintenance and repair tasks, promoting accountability, timely action, and continuous operation of critical medical equipment.."
        propAlignSelf4="stretch"
        button="Create Job Card"
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
        titleTextFlex="1"
        titleTextWidth="unset"
        card8MinWidth="unset"
        headerFlexWrap="unset"
        titleGoesHereHeight="unset"
        titleGoesHereDisplay="unset"
        bottomHeight="unset"
        card8Overflow="unset"
        rectangleIconHeight="194px"
        loremIpsumDolorTextAlign="left"
        loremIpsumDolorDisplay="unset"
      />
      <CardList />
    </section>
  );
};

export default CardContainer;
