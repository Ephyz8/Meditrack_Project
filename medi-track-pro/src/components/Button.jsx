// src/components/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ children, onClick, type = 'button', className, disabled = false }) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`${styles.button} ${className}`} 
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,   // The content inside the button (usually text)
  onClick: PropTypes.func,               // Event handler for the button click
  type: PropTypes.string,                // Button type (e.g., 'button', 'submit')
  className: PropTypes.string,           // Optional additional CSS classes
  disabled: PropTypes.bool,              // Disable the button if true
};

export default Button;
