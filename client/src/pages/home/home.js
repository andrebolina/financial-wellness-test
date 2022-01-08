import { useState } from 'react';
import Footer from '../../components/footer';
import MoneyField from '../../components/money-field';

import logoCircle from '../../assets/images/brand/origin-circle.png';

import './home.css';

function Home() {
  const [annualIncome, setAnnualIncome] = useState(null);
  const [monthlyCosts, setMonthlyCosts] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(annualIncome, monthlyCosts);
  }

  return (
    <div className="wrapper">
      <div className="container">
        <p className="subtitle">Let's find out your <span className="semibold">financial wellness score.</span></p>
        <form className="form-container" onSubmit={handleFormSubmit}>
          <div className="form-header">
            <div>
              <img src={logoCircle} alt="" />
            </div>
            <div className="form-title">
              <h1 className="heading-small">Financial wellness test</h1>
              <p className="paragraph">Enter your financial information below</p>
            </div>
          </div>

          <div className="form-inputs">
            <div className="input-container">
              <MoneyField label="Annual income" onChange={setAnnualIncome} />
            </div>
            <div className="input-container">
              <MoneyField label="Monthly Costs" onChange={setMonthlyCosts} />
            </div>
          </div>

          <button className="primary-button">Continue</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
