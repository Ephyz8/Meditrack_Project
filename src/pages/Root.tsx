import { FunctionComponent } from "react";
import FeatureList from "../components/FeatureList";
import TechnologyFocus from "../components/TechnologyFocus";
import CardContainer from "../components/CardContainer";
import styles from "./Root.module.css";

const Root1: FunctionComponent = () => {
  return (
    <div className={styles.main}>
      <FeatureList />
      <img
        className={styles.webLeftImage}
        loading="lazy"
        alt=""
        src="/web-left-image@2x.png"
      />
      <TechnologyFocus />
      <CardContainer />
    </div>
  );
};

export default Root1;