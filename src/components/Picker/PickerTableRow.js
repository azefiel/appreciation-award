import React from 'react';
import PickerTableCell from './PickerTableCell';

function PickerTableRow(props) {
  const cellsSpec = [{
    id: 'name',
    type: 'text',
    placeholder: 'Waldo'
  }, {
    id: 'total',
    type: 'number',
    placeholder: '0'
  }];

  return (
    <tr>
      {cellsSpec.map(cell => (
        <PickerTableCell
          key={cell.id}
          value={props.row[cell.id]}
          cell={cell}
          rowIndex={props.index}
          onValueChange={props.onValueChange}
        />
      ))}
      <td>
        {props.isOnlyRow ?
          null :
          <button>x</button>
        }
      </td>
    </tr>
  );
}

export default PickerTableRow;
