import { FunctionComponent } from "react";
import AboutHeader from "./AboutHeader";
import Card from "./Card";
import styles from "./CardList.module.css";

export type CardListType = {
  className?: string;
};

const CardList: FunctionComponent<CardListType> = ({ className = "" }) => {
  return (
    <div className={[styles.featuresGrid, className].join(" ")}>
      <div className={styles.secondCardHeader}>
        <AboutHeader />
      </div>
      <div className={styles.cardList}>
        <div className={styles.cardRow}>
          <div className={styles.cardContainer}>
            <div className={styles.secondCard}>
              <Card
                propFlex="unset"
                propAlignSelf="stretch"
                propWidth="unset"
                propMarginLeft="unset"
                propMarginBottom="unset"
                propHeight="unset"
                propPadding="unset"
                propHeight1="unset"
                propMinWidth="207px"
                propPadding1="unset"
                propAlignSelf1="unset"
                titleGoesHere="FAULT REPORTING"
                propAlignSelf2="unset"
                propFlex1="unset"
                secondaryText="Document every fault"
                propHeight2="unset"
                propDisplay="unset"
                propAlignSelf3="stretch"
                rectangle18="/rectangle-18-1@2x.png"
                propFlex2="unset"
                propFlex3="unset"
                loremIpsumDolorSitAmetConsecte="Enable quick and accurate reporting of equipment issues by medical staff, ensuring timely intervention and minimizing downtime for essential medical tools"
                propAlignSelf4="unset"
                button="Report fault"
                titleTextFlex="1"
                titleTextWidth="unset"
                card8MinWidth="unset"
                headerFlexWrap="unset"
                titleGoesHereHeight="unset"
                titleGoesHereDisplay="unset"
                bottomHeight="unset"
                card8Overflow="hidden"
                rectangleIconHeight="174px"
                loremIpsumDolorTextAlign="center"
                loremIpsumDolorDisplay="inline-block"
              />
            </div>
            <Card
              propFlex="unset"
              propAlignSelf="unset"
              propWidth="unset"
              propMarginLeft="unset"
              propMarginBottom="unset"
              propHeight="unset"
              propPadding="unset"
              propHeight1="unset"
              propMinWidth="209px"
              propPadding1="unset"
              propAlignSelf1="unset"
              titleGoesHere="JOB CARD"
              propAlignSelf2="stretch"
              propFlex1="unset"
              secondaryText="Document every step"
              propHeight2="unset"
              propDisplay="unset"
              propAlignSelf3="stretch"
              rectangle18="/rectangle-18-2@2x.png"
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
              card8Overflow="hidden"
              rectangleIconHeight="194px"
              loremIpsumDolorTextAlign="center"
              loremIpsumDolorDisplay="inline-block"
            />
            <Card
              propFlex="unset"
              propAlignSelf="unset"
              propWidth="unset"
              propMarginLeft="unset"
              propMarginBottom="unset"
              propHeight="unset"
              propPadding="2px 0px"
              propHeight1="unset"
              propMinWidth="206px"
              propPadding1="unset"
              propAlignSelf1="unset"
              titleGoesHere="INVENTORY"
              propAlignSelf2="stretch"
              propFlex1="unset"
              secondaryText="Document every asset"
              propHeight2="unset"
              propDisplay="unset"
              propAlignSelf3="stretch"
              rectangle18="/rectangle-18-3@2x.png"
              propFlex2="unset"
              propFlex3="unset"
              loremIpsumDolorSitAmetConsecte="Efficiently manage and track all medical equipment, ensuring readiness, proper maintenance scheduling, and compliance with asset management protocols at your Hospital."
              propAlignSelf4="unset"
              button="Edit inventory"
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
              card8Overflow="hidden"
              rectangleIconHeight="194px"
              loremIpsumDolorTextAlign="center"
              loremIpsumDolorDisplay="inline-block"
            />
          </div>
        </div>
        <footer className={styles.thirdCardRowParent}>
          <div className={styles.thirdCardRow}>
            <Card
              propFlex="unset"
              propAlignSelf="stretch"
              propWidth="unset"
              propMarginLeft="unset"
              propMarginBottom="unset"
              propHeight="unset"
              propPadding="10px 0px"
              propHeight1="unset"
              propMinWidth="206px"
              propPadding1="unset"
              propAlignSelf1="unset"
              titleGoesHere="PPM FORM"
              propAlignSelf2="stretch"
              propFlex1="unset"
              secondaryText="Document every work"
              propHeight2="unset"
              propDisplay="unset"
              propAlignSelf3="stretch"
              rectangle18="/rectangle-18-4@2x.png"
              propFlex2="unset"
              propFlex3="unset"
              loremIpsumDolorSitAmetConsecte="Schedule and record regular maintenance activities to prevent equipment failures, extending the lifespan of devices and ensuring consistent performance."
              propAlignSelf4="unset"
              button="Record"
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
              loremIpsumDolorTextAlign="center"
              loremIpsumDolorDisplay="inline-block"
            />
          </div>
          <div className={styles.cardContainer1}>
            <Card
              propFlex="unset"
              propAlignSelf="stretch"
              propWidth="unset"
              propMarginLeft="unset"
              propMarginBottom="unset"
              propHeight="unset"
              propPadding="17px 0px"
              propHeight1="unset"
              propMinWidth="207px"
              propPadding1="unset"
              propAlignSelf1="unset"
              titleGoesHere="Daily Routine"
              propAlignSelf2="stretch"
              propFlex1="unset"
              secondaryText="Document every day’s work"
              propHeight2="unset"
              propDisplay="unset"
              propAlignSelf3="unset"
              rectangle18="/rectangle-18-5@2x.png"
              propFlex2="unset"
              propFlex3="unset"
              loremIpsumDolorSitAmetConsecte="Log daily maintenance activities and routine checks, ensuring ongoing equipment reliability and addressing minor issues before they escalate."
              propAlignSelf4="unset"
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
              titleTextFlex="1"
              titleTextWidth="unset"
              card8MinWidth="unset"
              headerFlexWrap="unset"
              titleGoesHereHeight="unset"
              titleGoesHereDisplay="unset"
              bottomHeight="unset"
              card8Overflow="unset"
              rectangleIconHeight="194px"
              loremIpsumDolorTextAlign="center"
              loremIpsumDolorDisplay="inline-block"
            />
          </div>
          <Card
            titleGoesHere="REPORTS"
            secondaryText="Generate reports"
            rectangle18="/rectangle-18-6@2x.png"
            loremIpsumDolorSitAmetConsecte="Create  reports on equipment status, maintenance activities, and fault resolutions, providing valuable insights for decision-making, compliance, and improving hospital operations."
            button="Generate report"
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
        </footer>
      </div>
    </div>
  );
};

export default CardList;
