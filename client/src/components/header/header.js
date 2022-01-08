import styles from './header.module.css';

import logo from 'assets/images/brand/origin-logo.png';

function Header() {
  return (
    <header id="main-header" className={styles.header}>
      <div className={styles.content}>
        <img src={logo} alt="Origin" />
      </div>
    </header>
  );
}

export default Header;
