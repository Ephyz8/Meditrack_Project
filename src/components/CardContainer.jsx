import Card from "./Card";
import CardList from "./CardList";
import PropTypes from "prop-types";
import styles from "./CardContainer.module.css";

const CardContainer = ({ className = "" }) => {
  return (
    <section className={[styles.cardContainer, className].join(" ")}>
      <Card
        propFlex="unset"
        propAlignSelf="unset"
        propWidth="354px"
        propMarginLeft="-442px"
        propMarginBottom="-521px"
        propHeight="unset"
        propPadding="unset"
        propHeight1="unset"
        propMinWidth="unset"
        propPadding1="0px 20px"
        propAlignSelf1="unset"
        titleGoesHere="JOB CARD"
        propAlignSelf2="stretch"
        propFlex1="unset"
        secondaryText="Document every step"
        propHeight2="unset"
        propDisplay="inline-block"
        propAlignSelf3="unset"
        rectangle18="/rectangle-18@2x.png"
        propFlex2="unset"
        propFlex3="unset"
        loremIpsumDolorSitAmetConsecte="Document and monitor all maintenance and repair tasks, promoting accountability, timely action, and continuous operation of critical medical equipment.."
        propAlignSelf4="unset"
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
        secondaryTextWidth="251px"
      />
      <CardList />
    </section>
  );
};

CardContainer.propTypes = {
  className: PropTypes.string,
};

export default CardContainer;
