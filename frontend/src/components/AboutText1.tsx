import { FunctionComponent } from "react";
import styles from "./AboutText1.module.css";

export type AboutText1Type = {
  className?: string;
};

const AboutText1: FunctionComponent<AboutText1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.aboutText, className].join(" ")}>
      <div className={styles.meditrackProIs}>
        MediTrack Pro is a cutting-edge web and mobile application designed to
        revolutionize the way medical equipment is managed in Hospitals. Our
        platform empowers both Medical Equipment Users and Biomedical Engineers
        by streamlining equipment tracking, fault reporting, preventive
        maintenance scheduling, and more. Developed with the latest
        technologies, MediTrack Pro ensures that hospital staff can manage
        equipment efficiently, reducing downtime and enhancing the quality of
        patient care. Whether you're an administrator overseeing the entire
        hospital's equipment or a user reporting a fault, MediTrack Pro makes
        the process intuitive and efficient. At its core, MediTrack Pro is about
        improving healthcare outcomes by ensuring that critical medical
        equipment is always ready for use when needed. Join us in this mission
        to enhance healthcare delivery.
      </div>
    </div>
  );
};

export default AboutText1;
