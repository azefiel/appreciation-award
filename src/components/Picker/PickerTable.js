import React from 'react';
import PickerTableRow from './PickerTableRow';
import './PickerTable.css';

function PickerTable(props) {
  const isOnlyRow = props.rows.length === 1;

  return (
    <table className="PickerTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, index) => (
          <PickerTableRow
            key={index}
            row={row}
            isOnlyRow={isOnlyRow}
            index={index}
            onValueChange={props.onValueChange}
            onRowRemoval={props.onRowRemoval}
          />
        ))}
        <tr>
          <td>
            <button onClick={props.onRowAddition}>+</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default PickerTable;
