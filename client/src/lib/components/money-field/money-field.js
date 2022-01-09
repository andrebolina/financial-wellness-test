import { useState } from "react";
import classNames from "classnames";
import { formatMoneyValue, formatNumberValue } from "lib/utils";
import PropTypes from "prop-types";

import styles from "./money-field.module.css";

function MoneyField({ errorMessage, label, onChange, placeholder }) {
  const [value, setValue] = useState("");

  const handleOnChange = e => {
    const moneyValue = formatMoneyValue(e.target.value);
    const numberValue = formatNumberValue(e.target.value);

    setValue(moneyValue);
    onChange(numberValue);
  };

  return (
    <div className={styles.container}>
      <label>
        {label ? (
          <div
            className={classNames(styles.label, { [styles.error]: errorMessage })}
          >
            {label}
          </div>
        ) : null}
        <input
          placeholder={placeholder}
          className={classNames(styles.input, { [styles.error]: errorMessage })}
          value={value}
          onChange={handleOnChange}
        />
      </label>
      {errorMessage ? <p className={styles.errorMessage}>{errorMessage}</p> : null}
    </div>
  );
}

MoneyField.propTypes = {
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default MoneyField;
