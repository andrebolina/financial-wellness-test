import { useState } from 'react';
import { Footer, MoneyField } from 'components';

import logoCircle from 'assets/images/brand/origin-circle.png';

import styles from './home.module.css';

function Home() {
  const [annualIncome, setAnnualIncome] = useState(null);
  const [monthlyCosts, setMonthlyCosts] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(annualIncome, monthlyCosts);
  }

  return (
    <div className={styles.wrapper}>
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
              <MoneyField label="Annual income" onChange={setAnnualIncome} placeholder='0' />
            </div>
            <div className={styles.inputContainer}>
              <MoneyField label="Monthly Costs" onChange={setMonthlyCosts} placeholder='0' />
            </div>
          </div>

          <button className={styles.primaryButton}>Continue</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
