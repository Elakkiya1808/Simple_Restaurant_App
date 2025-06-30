import React, { useState, useEffect } from 'react';

function TimeDropdown({ onChange, value, isInvalid }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const times = [
    { label: '5:00 pm', value: '5:00 pm' },
    { label: '6:00 pm', value: '6:00 pm' },
    { label: '7:00 pm', value: '7:00 pm' },
    { label: '8:00 pm', value: '8:00 pm' },
    { label: '9:00 pm', value: '9:00 pm' },
    { label: '10:00 pm', value: '10:00 pm' },
  ];

  useEffect(() => {
    const label = times.find((t) => t.value === value)?.label || '';
    setSelected(label);
  }, [value]);

  const handleSelect = (value) => {
    const label = times.find((t) => t.value === value)?.label || '';
    setSelected(label);
    onChange({ target: { name: 'time', value } });
    setOpen(false);
  };

  return (
    <div className={`custom-dropdown ${isInvalid ? 'invalid' : ''}`}>
      <div
        className={`custom-input ${isInvalid ? 'is-invalid' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <span>{selected || 'Select time'}</span>
        <span className="arrow">▾</span>
      </div>
      {open && (
        <div className="dropdown-grid">
          {times.map((time) => (
            <div
              key={time.value}
              className="dropdown-option"
              onClick={() => handleSelect(time.value)}
            >
              {time.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TimeDropdown;
