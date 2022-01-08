import classnames from 'classnames';

import { HEALTHY, MEDIUM, LOW } from '../../constants'

import './health-bar.css';

function HealthBar({ level }) {
  return (
    <div className="health-bar-container">
      <div className={classnames("health-level", { "healthy": level === HEALTHY, "medium": level === MEDIUM, "low": level === LOW })}></div>
      <div className={classnames("health-level", { "healthy": level === HEALTHY, "medium": level === MEDIUM })}></div>
      <div className={classnames("health-level", { "healthy": level === HEALTHY })}></div>
    </div>
  );
}

export default HealthBar;
