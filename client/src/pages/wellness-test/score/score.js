import { useEffect, useState } from 'react';
import { Button, HealthBar, LoadingSpinner } from 'lib/components';
import { wellnessScores } from 'lib/constants';

import logoCircle from 'assets/images/brand/origin-circle.png';

import styles from './score.module.css';

function Score({ formValues, onReturn }) {
  const [scoreData, setScoreData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/wellness/${formValues.annualIncome}/${formValues.monthlyCosts}/score`)
      .then(res => res.json()).then(response => {
        setScoreData(wellnessScores[response.score] || 0);
      });
  }, []);

  return (
    <>
      <p className={styles.subtitle}>Here's your <span className={styles.semibold}>financial wellness score</span>:</p>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={logoCircle} alt="" />
        </div>
        <div className={styles.resultContainer}>
          {scoreData ? <>
            <HealthBar level={scoreData.level} />

            <div className={styles.message}>
              <h1 className={styles.headingSmall}>{scoreData.message}</h1>
              <p className={styles.paragraph}>Your financial wellness score is <span className={styles.semibold}>{scoreData.title}</span>.</p>
            </div>
          </>
            : <LoadingSpinner />}
        </div>

        <Button classes={{ button: styles.button }} onClick={onReturn}>Return</Button>
      </div>
    </>
  );
}

export default Score;
