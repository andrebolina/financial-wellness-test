import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { formatMoneyValue } from 'utils';

import styles from './money-field.module.css';

function MoneyField({ errorMessage, label, onChange, placeholder }) {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    const formattedValue = formatMoneyValue(e.target.value);

    setValue(formattedValue);
    onChange(formattedValue);
  }

  return (
    <div className={styles.container}>
      {label ? <label className={classNames(styles.label, { [styles.error]: errorMessage })}>{label}</label> : null}
      <input placeholder={placeholder} className={classNames(styles.input, { [styles.error]: errorMessage })} value={value} onChange={handleOnChange} />
      {errorMessage ? <p className={styles.errorMessage}>{errorMessage}</p> : null}
    </div>
  );
}

MoneyField.propTypes = {
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default MoneyField;
