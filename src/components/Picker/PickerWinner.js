import React from 'react';
import './PickerWinner.css';

function PickerWinner(props) {
  const month = new Date().toLocaleString('en-US', { month: 'long' });

  return (
    <div>
      <p>
        The winner for <strong>{month}</strong> is
      </p>
      <h2 className="PickerWinner-name">
        {props.name}
      </h2>
    </div>
  );
}

export default PickerWinner;
