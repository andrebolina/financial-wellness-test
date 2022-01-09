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
        {!formValues ? (
          <Form setFormValues={setFormValues} />
        ) : (
          <Score onReturn={resetForm} formValues={formValues} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default WellnessTest;
