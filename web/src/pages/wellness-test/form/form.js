import { useContext, useState } from "react";
import { Button, MoneyField } from "lib/components";

import Context from "../context";

import styles from "./form.module.css";

import logoCircle from "assets/images/brand/origin-circle.png";
function Form() {
  const [, setFormValues] = useContext(Context);
  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false);
  const [annualIncome, setAnnualIncome] = useState(null);
  const [monthlyCosts, setMonthlyCosts] = useState(null);

  const handleFormSubmit = e => {
    e.preventDefault();
    setHasSubmittedOnce(true);

    if (annualIncome && monthlyCosts) {
      setFormValues({ annualIncome, monthlyCosts });
    }
  };

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
    </>
  );
}

export default Form;
