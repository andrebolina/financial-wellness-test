import styles from "./footer.module.css";

import lockIcon from "assets/images/icons/lock.svg";

function Footer() {
  return (
    <footer id="legal-footer" className={styles.footer}>
      <div className={styles.content}>
        <img src={lockIcon} alt="" className={styles.icon} />
        <p className={styles.description}>
          Your financial information is encrypted and secure. We&apos;ll never
          share or sell any of your personal data.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
