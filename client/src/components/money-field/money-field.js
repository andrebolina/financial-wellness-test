import { useState } from 'react';

import styles from './money-field.module.css';

function MoneyField({ label, onChange = () => { } }) {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    const fieldValue = e.target.value;

    setValue(fieldValue);
    onChange(fieldValue);
  }

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} value={value} onChange={handleOnChange} />
    </div>
  );
}

export default MoneyField;
