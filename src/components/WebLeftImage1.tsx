import { FunctionComponent } from "react";
import styles from "./WebLeftImage1.module.css";

export type WebLeftImageType = {
  className?: string;
};

const WebLeftImage: FunctionComponent<WebLeftImageType> = ({
  className = "",
}) => {
  return (
    <img
      className={[styles.webLeftImage, className].join(" ")}
      loading="lazy"
      alt=""
      src="/web-left-image@2x.png"
    />
  );
};

export default WebLeftImage;
