import { useState } from 'react';
import { Footer, Header } from 'lib/components';

import WellnessForm from 'pages/wellness-form';
import WellnessScore from 'pages/wellness-score';

function WellnessTest() {
  const [formValues, setFormValues] = useState(null);

  return (
    <>
      <Header />
      {!formValues ? <WellnessForm setFormValues={setFormValues} /> : <WellnessScore setFormValues={setFormValues} formValues={formValues} />}
      <Footer />
    </>
  )
}

export default WellnessTest;
