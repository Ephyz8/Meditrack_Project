import Component2 from "./Component2";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import styles from "./EmailFields.module.css";

const EmailFields = ({ className = "" }) => {
  return (
    <div className={[styles.emailFields, className].join(" ")}>
      <div className={styles.emailFieldsChild} />
      <div className={styles.passwordFields}>
        <div className={styles.passwordField}>
          <div className={styles.passwordInput}>
            <img className={styles.mailIcon} alt="" src="/mail.svg" />
            <img
              className={styles.mailIcon1}
              loading="lazy"
              alt=""
              src="/mail.svg"
            />
          </div>
        </div>
        <div className={styles.showPassword}>
          <img
            className={styles.showPasswordIcon}
            loading="lazy"
            alt=""
            src="/vector2.svg"
          />
          <div className={styles.capsLockWarning}>
            <div className={styles.capsLockIcon}>
              <img
                className={styles.capsLockWarningIcon}
                alt=""
                src="/vector2.svg"
              />
            </div>
            <div className={styles.capsLockWarningChild} />
          </div>
          <div className={styles.strengthIndicator}>
            <div className={styles.strengthBar}>
              <div className={styles.strengthLevel}>
                <Component2
                  propWidth="238.8px"
                  propMargin="unset"
                  propBottom="unset"
                  propLeft="unset"
                  propTop="unset"
                  propPosition="relative"
                  rectangle23="pending_I248:266;238:117"
                  email="Create Password"
                  propHeight="57.69%"
                  propWidth1="69.1%"
                  propTop1="19.95%"
                  propLeft1="4.61%"
                  propMinWidth="unset"
                />
                <div className={styles.strengthCheckmark}>
                  <img
                    className={styles.strengthCheckmarkIcon}
                    loading="lazy"
                    alt=""
                    src="/vector-21.svg"
                  />
                </div>
              </div>
            </div>
            <img className={styles.strengthIndicatorChild} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.emailFieldsItem} />
      <div className={styles.forgotPasswordLink}>
        <FrameComponent1 forgetPassword="Already have an account?" />
      </div>
      <div className={styles.buttonBackground} />
      <a className={styles.signup}>Signup</a>
      <div className={styles.emailFieldsInner} />
      <div className={styles.lineDiv} />
      <img className={styles.buttonBorderIcon} alt="" />
      <div className={styles.signupButton} />
      <h2 className={styles.signup1}>Signup</h2>
      <Component2
        propWidth="238.8px"
        propMargin="0 !important"
        propBottom="unset"
        propLeft="16px"
        propTop="8.1px"
        propPosition="absolute"
        rectangle23="pending_I239:210;238:117"
        email="Email"
        propHeight="57.69%"
        propWidth1="22.61%"
        propTop1="19.95%"
        propLeft1="4.61%"
        propMinWidth="54px"
      />
      <Component2
        propWidth="238.8px"
        propMargin="0 !important"
        propBottom="unset"
        propLeft="16px"
        propTop="80.1px"
        propPosition="absolute"
        rectangle23="pending_I248:250;238:117"
        email="First name"
        propHeight="57.69%"
        propWidth1="43.55%"
        propTop1="19.95%"
        propLeft1="4.61%"
        propMinWidth="104px"
      />
      <Component2
        propWidth="238.8px"
        propMargin="0 !important"
        propBottom="unset"
        propLeft="16px"
        propTop="143.1px"
        propPosition="absolute"
        rectangle23="pending_I248:261;238:117"
        email="Surname"
        propHeight="57.69%"
        propWidth1="37.27%"
        propTop1="19.95%"
        propLeft1="4.61%"
        propMinWidth="89px"
      />
      <Component2
        rectangle23="pending_I239:211;238:117"
        email="Confirm Password"
      />
      <img
        className={styles.signupButtonIcon}
        loading="lazy"
        alt=""
        src="/vector-31.svg"
      />
    </div>
  );
};

EmailFields.propTypes = {
  className: PropTypes.string,
};

export default EmailFields;
