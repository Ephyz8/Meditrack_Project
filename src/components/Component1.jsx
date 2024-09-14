import EmailFields from "./EmailFields";
import PropTypes from "prop-types";
import styles from "./Component1.module.css";

const Component1 = ({ className = "" }) => {
  return (
    <div className={[styles.component3, className].join(" ")}>
      <EmailFields />
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,
};

export default Component1;
