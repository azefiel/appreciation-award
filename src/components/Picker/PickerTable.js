import React from 'react';
import PickerTableRow from './PickerTableRow';

class PickerTable extends React.Component {
  handleRowAddition = () => {
    this.props.onRowAddition();
  }

  render() {
    const isOnlyRow = this.props.rows.length === 1;

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
          {this.props.rows.map((row, index) => (
            <PickerTableRow
              key={index}
              row={row}
              isOnlyRow={isOnlyRow}
              index={index}
              onValueChange={this.props.onValueChange}
              onRowRemoval={this.props.onRowRemoval}
            />
          ))}
          <tr>
            <td>
              <button onClick={this.handleRowAddition}>+</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default PickerTable;
