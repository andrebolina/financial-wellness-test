import { useState } from 'react';
import { Footer, Header } from 'lib/components';

import WellnessForm from './wellness-form'
import WellnessScore from './wellness-score'

import styles from './wellness-test.module.css'

function WellnessTest() {
  const [formValues, setFormValues] = useState(null);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        {!formValues ? <WellnessForm setFormValues={setFormValues} /> : <WellnessScore setFormValues={setFormValues} formValues={formValues} />}
      </div>
      <Footer />
    </>
  )
}

export default WellnessTest;
