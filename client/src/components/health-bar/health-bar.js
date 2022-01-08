import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './health-bar.module.css';

function HealthBar({ level }) {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.level, { [styles.healthy]: level === 3, [styles.medium]: level === 2, [styles.low]: level === 1 })}></div>
      <div className={classNames(styles.level, { [styles.healthy]: level === 3, [styles.medium]: level === 2 })}></div>
      <div className={classNames(styles.level, { [styles.healthy]: level === 3 })}></div>
    </div>
  );
}

HealthBar.propTypes = {
  level: PropTypes.number.isRequired
};

export default HealthBar;
