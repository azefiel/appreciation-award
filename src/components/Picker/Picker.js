import React from 'react';
import PickerTable from './PickerTable';

function Picker(props) {
  return (
    <div className="Picker">
      <PickerTable {...props} />
      <p>
        <button className="Picker-button">
          Pick a Winner
        </button>
      </p>
    </div>
  );
}

export default Picker;