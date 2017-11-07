import React from 'react';

function PickerTableCell(props) {
  return (
    <td>
      <input
        value={props.value}
        {...props.cell}
      />
    </td>
  );
}

export default PickerTableCell;
