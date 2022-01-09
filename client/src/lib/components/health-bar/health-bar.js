import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./health-bar.module.css";

function HealthBar({ level }) {
  return (
    <div className={styles.container}>
      <span
        className={classNames(styles.level, {
          [styles.healthy]: level === 3,
          [styles.medium]: level === 2,
          [styles.low]: level === 1,
        })}
      />
      <span
        className={classNames(styles.level, {
          [styles.healthy]: level === 3,
          [styles.medium]: level === 2,
        })}
      />
      <span
        className={classNames(styles.level, { [styles.healthy]: level === 3 })}
      />
    </div>
  );
}

HealthBar.propTypes = {
  level: PropTypes.number.isRequired,
};

export default HealthBar;
