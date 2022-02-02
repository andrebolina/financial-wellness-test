import styles from "./page-view.module.css";

function PageView({ content }) {
  return (
    <div className={styles.container}>
        <div className={styles.banner}>
            <div className={styles.label}>{content.pageviewLabel}</div>
            <img src={content.pageviewImg} alt='Banner' />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.title}>{content.pageviewTitle}</div>
            <div className={styles.description}>{content.pageviewDescription}</div>
        </div>
    </div>
  );
}

export default PageView;
