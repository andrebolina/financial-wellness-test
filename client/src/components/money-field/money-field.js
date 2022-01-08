import { useState } from 'react';

import './money-field.css';

function MoneyField({ label, onChange = () => { } }) {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    const fieldValue = e.target.value;

    setValue(fieldValue);
    onChange(fieldValue);
  }

  return (
    <div className="field-container">
      <label className="field-label">{label}</label>
      <input className="field-input" value={value} onChange={handleOnChange} />
    </div>
  );
}

export default MoneyField;
