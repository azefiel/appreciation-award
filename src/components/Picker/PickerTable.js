import React from 'react';
import PickerTableRow from './PickerTableRow';

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
            />
          ))}
          <tr>
            <td>
              <button>+</button>
            </td>
          </tr>
        </tbody>
      </table>
  );
}

export default PickerTable;
