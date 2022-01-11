import { useState } from "react";
import { Footer, Header } from "lib/components";

import Form from "./form";
import Score from "./score";

import styles from "./wellness-test.module.css";

function WellnessTest() {
  const [formValues, setFormValues] = useState(null);

  const resetForm = () => {
    setFormValues(null);
  };

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>
          {!formValues ? "Let's find out your " : "Here's your "}
          <span className={styles.semibold}>financial wellness score</span>
          {!formValues ? "." : ":"}
        </p>
        <div className={styles.container}>
          {!formValues ? (
            <Form setFormValues={setFormValues} />
          ) : (
            <Score onReturn={resetForm} formValues={formValues} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WellnessTest;
