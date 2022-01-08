import './header.css';

import logo from '../../assets/images/brand/origin-logo.png';

function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <img src={logo} alt="Origin" />
      </div>
    </header>
  );
}

export default Header;
