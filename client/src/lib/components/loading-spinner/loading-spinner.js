import styles from "./loading-spinner.module.css";

function LoadingSpinner({ size = 50 }) {
  return (
    <span
      data-testid='loading-spinner'
      className={styles.spinner}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
}

export default LoadingSpinner;
