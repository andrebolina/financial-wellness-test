import { useEffect, useState } from "react";
import { Button, HealthBar, LoadingSpinner } from "lib/components";
import { wellnessScores } from "lib/constants";
import { apiGet } from "services";

import logoCircle from "assets/images/brand/origin-circle.png";

import styles from "./score.module.css";

function Score({ formValues, onReturn }) {
  const [scoreData, setScoreData] = useState(null);

  useEffect(() => {
    apiGet(
      `wellness/${formValues.annualIncome}/${formValues.monthlyCosts}/score`
    ).then(response => {
      setScoreData(wellnessScores[response.score] || 0);
    });
  }, []);

  return (
    <>
      <p className={styles.subtitle}>
        Here&apos;s your{" "}
        <span className={styles.semibold}>financial wellness score</span>:
      </p>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={logoCircle} alt='' />
        </div>
        <div className={styles.resultContainer}>
          {scoreData ? (
            <>
              <HealthBar level={scoreData.level} />

              <div className={styles.message}>
                <h1 className={styles.headingSmall}>{scoreData.message}</h1>
                <p className={styles.paragraph}>
                  Your financial wellness score is{" "}
                  <span className={styles.semibold}>{scoreData.title}</span>.
                </p>
              </div>
            </>
          ) : (
            <LoadingSpinner />
          )}
        </div>

        <Button classes={{ button: styles.button }} onClick={onReturn}>
          Return
        </Button>
      </div>
    </>
  );
}

export default Score;
