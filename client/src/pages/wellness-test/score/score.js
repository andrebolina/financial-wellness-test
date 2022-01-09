import { useEffect, useState } from 'react';
import { Button, HealthBar } from 'lib/components';
import { wellnessLevel } from 'lib/constants';

import logoCircle from 'assets/images/brand/origin-circle.png';

import styles from './score.module.css';

function Score({ formValues, onReturn }) {
  const [scoreLevel, setScoreLevel] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/wellness/${formValues.annualIncome}/${formValues.monthlyCosts}/score`)
      .then(res => res.json()).then(response => {
        setScoreLevel(wellnessLevel[response.score] || 0);
      });
  }, []);

  return (
    <>
      <p className={styles.subtitle}>Here's your <span className={styles.semibold}>financial wellness score</span>:</p>
      <div className={styles.resultContainer}>
        <div className={styles.resultHeader}>
          <img src={logoCircle} alt="" />
        </div>

        {scoreLevel ? <HealthBar level={scoreLevel} /> : 'Loading'}

        <div className={styles.resultMessage}>
          <h1 className={styles.headingSmall}>Congratulations!</h1>
          <p className={styles.paragraph}>Your financial wellness score is <span className={styles.semibold}>Healthy</span>.</p>
        </div>

        <Button classes={{ button: styles.button }} onClick={onReturn}>Return</Button>
      </div>
    </>
  );
}

export default Score;
