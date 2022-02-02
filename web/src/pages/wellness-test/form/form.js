import { useContext, useEffect, useState } from "react";
import { UserIdContext, WellnessTestContext } from "contexts";
import { Button, MoneyField } from "lib/components";
import { formatHistoryScore, formatHistoryValue,getHistoryScoreColor } from 'lib/utils'
import { apiGet } from 'services'

import styles from "./form.module.css";

import logoCircle from "assets/images/brand/origin-circle.png";
function Form() {
  const [userId, ] = useContext(UserIdContext);
  const [, setFormValues] = useContext(WellnessTestContext);
  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false);
  const [annualIncome, setAnnualIncome] = useState(null);
  const [monthlyCosts, setMonthlyCosts] = useState(null);
  const [scoreHistory, setScoreHistory] = useState([]);

  const handleFormSubmit = e => {
    e.preventDefault();
    setHasSubmittedOnce(true);

    if (annualIncome && monthlyCosts) {
      setFormValues({ annualIncome, monthlyCosts });
    }
  };

  useEffect(() => {
    apiGet(`wellness/score/history/${userId}`)
    .then(response => {
      setScoreHistory(response);
    });
  }, [userId])

  return (
    <>
      <form className={styles.formContainer} onSubmit={handleFormSubmit}>
        <div className={styles.formHeader}>
          <div>
            <img src={logoCircle} alt='' />
          </div>
          <div className={styles.formTitle}>
            <h1 className={styles.headingSmall}>Financial wellness test</h1>
            <p className={styles.paragraph}>
              Enter your financial information below
            </p>
          </div>
        </div>

        <div className={styles.formInputs}>
          <div className={styles.inputContainer}>
            <MoneyField
              errorMessage={
                hasSubmittedOnce && !annualIncome
                  ? "The value must be greater than 0"
                  : null
              }
              label='Annual income'
              onChange={setAnnualIncome}
              placeholder='0'
            />
          </div>
          <div className={styles.inputContainer}>
            <MoneyField
              errorMessage={
                hasSubmittedOnce && !monthlyCosts
                  ? "The value must be greater than 0"
                  : null
              }
              label='Monthly Costs'
              onChange={setMonthlyCosts}
              placeholder='0'
            />
          </div>
        </div>

        <Button classes={{ button: styles.button }}>Continue</Button>
      </form>

      <h1 className={styles.subHeading}>Your financial wellness score history:</h1>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <td>Date</td>
            <td>Income</td>
            <td>Costs</td>
            <td>Score</td>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {scoreHistory.length ? scoreHistory.sort((a, b) => 
            a.created_at > b.created_at ? -1 : 1
          ).map(history => {
            const date = new Date(history.created_at).toLocaleDateString("en-US");

            return (
            <tr key={history.created_at}>
              <td>{date}</td>
              <td>${formatHistoryValue(history.income)}</td>
              <td>${formatHistoryValue(history.costs)}</td>
              <td style={{fontWeight: '600', color: getHistoryScoreColor(history.score) }}>{formatHistoryScore(history.score)}</td>
            </tr>
            );
          }) : <tr><td colSpan="4" style={{textAlign: 'center'}}>No results found</td></tr>}
        </tbody>
      </table>
    </>
  );
}

export default Form;
