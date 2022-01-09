import { useEffect, useState } from "react";
import { Button, HealthBar, LoadingSpinner } from "lib/components";
import { wellnessScores } from "lib/constants";
import PropTypes from "prop-types";
import { apiGet } from "services";

import styles from "./score.module.css";

import logoCircle from "assets/images/brand/origin-circle.png";

function Score({ formValues, onReturn }) {
  const [scoreData, setScoreData] = useState(null);
  const { annualIncome, monthlyCosts } = formValues;

  useEffect(() => {
    apiGet(`wellness/${annualIncome}/${monthlyCosts}/score`).then(response => {
      setScoreData(wellnessScores[response.score]);
    });
  }, [annualIncome, monthlyCosts]);

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

      <Button classes={{ button: styles.button }} onClick={onReturn}>
        Return
      </Button>
    </>
  );
}

Score.propTypes = {
  formValues: PropTypes.shape({
    annualIncome: PropTypes.number.isRequired,
    monthlyCosts: PropTypes.number.isRequired,
  }).isRequired,
  onReturn: PropTypes.func.isRequired,
};

export default Score;
