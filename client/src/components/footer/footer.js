import './footer.css';

import lockIcon from '../../assets/images/icons/lock.svg';

function Footer() {
  return (
    <footer id="legal-footer">
      <div className="footer-content">
        <img src={lockIcon} alt="" className="footer-icon" />
        <p className="footer-copy">Your financial information is encrypted and secure. We'll never share or sell any of your personal data.</p>
      </div>
    </footer>
  );
}

export default Footer;
