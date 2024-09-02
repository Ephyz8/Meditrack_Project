import { FunctionComponent } from "react";
import styles from "./WebLeftImage.module.css";

export type WebLeftImageType = {
  className?: string;
};

const WebLeftImage: FunctionComponent<WebLeftImageType> = ({
  className = "",
}) => {
  return <div className={[styles.webLeftImage, className].join(" ")} />;
};

export default WebLeftImage;
