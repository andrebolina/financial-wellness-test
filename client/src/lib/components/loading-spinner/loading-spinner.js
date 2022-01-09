import PropTypes from "prop-types";

import styles from "./loading-spinner.module.css";

function LoadingSpinner({ size }) {
  return (
    <span
      data-testid='loading-spinner'
      className={styles.spinner}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
}

LoadingSpinner.propTypes = {
  size: PropTypes.number,
};

LoadingSpinner.defaultProps = {
  size: 50,
};

export default LoadingSpinner;
