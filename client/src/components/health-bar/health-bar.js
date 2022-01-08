import classnames from 'classnames';

import './health-bar.css';

function HealthBar({ level }) {
  return (
    <div className="health-bar-container">
      <div className={classnames("health-level", { "healthy": level === 3, "medium": level === 2, "low": level === 1 })}></div>
      <div className={classnames("health-level", { "healthy": level === 3, "medium": level === 2 })}></div>
      <div className={classnames("health-level", { "healthy": level === 1 })}></div>
    </div>
  );
}

export default HealthBar;
