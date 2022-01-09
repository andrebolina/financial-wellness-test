import { Button, HealthBar } from 'lib/components';

import logoCircle from 'assets/images/brand/origin-circle.png';

import styles from './wellness-score.module.css';

function WellnessScore({ formValues, setFormValues }) {
  console.log(formValues);

  return (
    <>
      <p className={styles.subtitle}>Here's your <span className={styles.semibold}>financial wellness score</span>:</p>
      <div className={styles.resultContainer}>
        <div className={styles.resultHeader}>
          <img src={logoCircle} alt="" />
        </div>

        <HealthBar level={1} />

        <div className={styles.resultMessage}>
          <h1 className={styles.headingSmall}>Congratulations!</h1>
          <p className={styles.paragraph}>Your financial wellness score is <span className={styles.semibold}>Healthy</span>.</p>
        </div>

        <Button classes={{ button: styles.button }} onClick={() => setFormValues(null)}>Return</Button>
      </div>
    </>
  );
}

export default WellnessScore;
