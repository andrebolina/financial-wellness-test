import { Footer, HealthBar } from 'components';

import logoCircle from 'assets/images/brand/origin-circle.png';

import styles from './result.module.css';

function Result() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
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

          <a className={styles.secondaryButton} href="/">Return</a>
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default Result;
