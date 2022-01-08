import { useState } from 'react';
import { Footer, Header } from 'lib/components';

import WellnessForm from 'pages/wellness-form';
import Result from 'pages/result';

function WellnessTest() {
  const [formValues, setFormValues] = useState(null);

  return (
    <>
      <Header />
      {!formValues ? <WellnessForm setFormValues={setFormValues} /> : <Result setFormValues={setFormValues} formValues={formValues} />}
      <Footer />
    </>
  )
}

export default WellnessTest;
