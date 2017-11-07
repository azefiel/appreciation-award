import React from 'react';
import PickerTable from './PickerTable';
import PickerWinner from './PickerWinner';

function Picker(props) {
  return (
    <div className="Picker">
    {props.winner ?
      <PickerWinner name={props.winner} /> : (
      <div>
        <PickerTable
          rows={props.rows}
          onValueChange={props.onValueChange}
          onRowAddition={props.onRowAddition}
          onRowRemoval={props.onRowRemoval}
        />
        <p>
          <button className="Picker-button">
            Pick a Winner
          </button>
        </p>
      </div>
    )}
    </div>
  );
}

export default Picker;
