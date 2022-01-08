import Footer from '../../components/footer';
import HealthBar from '../../components/health-bar';

import { HEALTHY, MEDIUM, LOW } from '../../constants'

import logoCircle from '../../assets/images/brand/origin-circle.png';

import './result.css';

function Result() {
  return (
    <div className="wrapper">
      <div className="container">
        <p className="subtitle">Here's your <span className="semibold">financial wellness score</span>:</p>
        <div className="result-container">
          <div className="result-header">
            <img src={logoCircle} alt="" />
          </div>

          <HealthBar level={HEALTHY} />

          <div className="result-message">
            <h1 className="heading-small">Congratulations!</h1>
            <p className="paragraph">Your financial wellness score is <span className="semibold">Healthy</span>.</p>
          </div>

          <a className="secondary-button" href="/">Return</a>
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default Result;
