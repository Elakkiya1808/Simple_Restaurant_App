import React, { useState, useEffect } from 'react';
import personIcon from '../assets/icons/person.png';
import '../styles.css'; // Ensure your styles include the red border logic

function DinerSelect({ onChange, isInvalid, value }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value || '');

  const diners = Array.from({ length: 10 }, (_, i) => `${i + 1} Diner${i ? 's' : ''}`);

  const handleSelect = (value) => {
    setSelected(value);
    onChange({ target: { name: 'diners', value } });
    setOpen(false);
  };

  useEffect(() => {
    setSelected(value); // Sync external value with local state
  }, [value]);

  return (
    <div className={`custom-dropdown ${isInvalid ? 'invalid' : ''}`}>
      <div
        className={`custom-input ${isInvalid ? 'is-invalid' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <img src={personIcon} alt="person" className="input-icon" />
        <span>{selected || 'No. of Diners'}</span>
        <span className="arrow">▾</span>
      </div>
      {open && (
        <div className="dropdown-grid">
          {diners.map((item) => (
            <div key={item} className="dropdown-option" onClick={() => handleSelect(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DinerSelect;
