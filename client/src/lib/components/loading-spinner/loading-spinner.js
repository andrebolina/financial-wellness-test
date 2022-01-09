import styles from './loading-spinner.module.css';

function LoadingSpinner({ size = 50 }) {
  return (
    <div className={styles.spinner} style={{ width: `${size}px`, height: `${size}px` }} ></div>
  );
}

export default LoadingSpinner;
