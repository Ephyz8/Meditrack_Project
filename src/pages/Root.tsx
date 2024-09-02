import { FunctionComponent } from "react";
import ContentHeader from "../components/ContentHeader";
import Card from "../components/Card";
import AboutContainer from "../components/AboutContainer";
import CardList from "../components/CardList";
import styles from "./Root.module.css";

const Root1: FunctionComponent = () => {
  return (
    <div className={styles.main}>
      <ContentHeader />
      <main className={styles.card6Parent}>
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
        />
        <section className={styles.frameParent}>
          <AboutContainer />
          <CardList />
        </section>
      </main>
    </div>
  );
};

export default Root1;