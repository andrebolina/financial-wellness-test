import { useContext, useEffect, useState } from "react";
import { UserIdContext, WellnessTestContext } from "contexts";
import { Button, HealthBar, LoadingSpinner, PageView } from "lib/components";
import { wellnessScores } from "lib/constants";
import { apiPost } from "services";

import styles from "./score.module.css";

import logoCircle from "assets/images/brand/origin-circle.png";

function Score() {
  const [userId, ] = useContext(UserIdContext);
  const [formValues, setFormValues] = useContext(WellnessTestContext);
  const [scoreData, setScoreData] = useState(null);
  const { annualIncome, monthlyCosts } = formValues;

  useEffect(() => {
    apiPost('wellness/score', {body: JSON.stringify({annual_income: annualIncome, monthly_costs: monthlyCosts, user_id: userId})})
    .then(response => {
      setScoreData(wellnessScores[response.score]);
    });
  }, [annualIncome, monthlyCosts, userId]);

  return (
    <>
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

      <Button
        classes={{ button: styles.button }}
        onClick={() => setFormValues(null)}
      >
        Return
      </Button>

      { scoreData ? <PageView content={scoreData} /> : null }
    </>
  );
}

export default Score;
