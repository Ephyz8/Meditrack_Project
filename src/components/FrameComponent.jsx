import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "./FrameComponent1";
import Component2 from "./Component2";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onAccountOptionsContainerClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <form className={[styles.frameParent, className].join(" ")}>
      <div className={styles.rectangleWrapper}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.authBackground} />
      <h1 className={styles.login}>Login</h1>
      <div className={styles.separator} />
      <img className={styles.frameItem} loading="lazy" alt="" />
      <div
        className={styles.accountOptions}
        onClick={onAccountOptionsContainerClick}
      >
        <div className={styles.createAnAccount}>Create an account</div>
        <FrameComponent1
          propPadding="0px 0px 0px 0px"
          propPosition="absolute"
          propTop="0px"
          propLeft="0px"
          propHeight="unset"
          propWidth="205px"
          forgetPassword="Create an account"
        />
      </div>
      <div className={styles.accountOptions1}>
        <div className={styles.forgetPassword}>Forget password</div>
        <FrameComponent1
          propPadding="unset"
          propPosition="absolute"
          propTop="0px"
          propLeft="0px"
          propHeight="100%"
          propWidth="100%"
          forgetPassword="Forget password"
        />
      </div>
      <div className={styles.loginForm}>
        <div className={styles.inputContainer}>
          <div className={styles.inputBackground} />
        </div>
        <div className={styles.login1}>Login</div>
      </div>
      <Component2
        propWidth="218px"
        propMargin="unset"
        propBottom="unset"
        propLeft="252px"
        propTop="112px"
        propPosition="absolute"
        rectangle23="pending_I238:143;238:117"
        email="Email"
        propHeight="60%"
        propWidth1="24.77%"
        propTop1="20%"
        propLeft1="4.59%"
        propMinWidth="54px"
      />
      <Component2
        propWidth="218px"
        propMargin="unset"
        propBottom="unset"
        propLeft="252px"
        propTop="240px"
        propPosition="absolute"
        rectangle23="pending_I238:146;238:117"
        email="Password"
        propHeight="60%"
        propWidth1="43.58%"
        propTop1="20%"
        propLeft1="4.59%"
        propMinWidth="95px"
      />
      <img
        className={styles.vectorIcon}
        loading="lazy"
        alt=""
        src="/vector1.svg"
      />
      <img
        className={styles.vectorIcon1}
        loading="lazy"
        alt=""
        src="/vector-11.svg"
      />
    </form>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
