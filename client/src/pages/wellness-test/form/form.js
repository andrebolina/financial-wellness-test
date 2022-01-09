import { useState } from 'react';
import { Button, MoneyField } from 'lib/components';

import logoCircle from 'assets/images/brand/origin-circle.png';

import styles from './form.module.css';

function Form({ setFormValues }) {
  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false);
  const [annualIncome, setAnnualIncome] = useState(null);
  const [monthlyCosts, setMonthlyCosts] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setHasSubmittedOnce(true);

    if (annualIncome && monthlyCosts) {
      setFormValues({ annualIncome, monthlyCosts });
    }
  }

  return (
    <div className={styles.container}>
      <p className={styles.subtitle}>Let's find out your <span className={styles.semibold}>financial wellness score.</span></p>
      <form className={styles.formContainer} onSubmit={handleFormSubmit}>
        <div className={styles.formHeader}>
          <div>
            <img src={logoCircle} alt="" />
          </div>
          <div className={styles.formTitle}>
            <h1 className={styles.headingSmall}>Financial wellness test</h1>
            <p className={styles.paragraph}>Enter your financial information below</p>
          </div>
        </div>

        <div className={styles.formInputs}>
          <div className={styles.inputContainer}>
            <MoneyField errorMessage={hasSubmittedOnce && !annualIncome ? 'Invalid Value' : null} label="Annual income" onChange={setAnnualIncome} placeholder='0' />
          </div>
          <div className={styles.inputContainer}>
            <MoneyField errorMessage={hasSubmittedOnce && !monthlyCosts ? 'Invalid Value' : null} label="Monthly Costs" onChange={setMonthlyCosts} placeholder='0' />
          </div>
        </div>

        <Button classes={{ button: styles.button }}>Continue</Button>
      </form>
    </div>
  );
}

export default Form;
