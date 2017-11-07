import React from 'react';
import PickerTableCell from './PickerTableCell';

class PickerTableRow extends React.Component {
  handleRowRemoval = () => {
    this.props.onRowRemoval(this.props.index);
  }

  render() {
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
            value={this.props.row[cell.id]}
            cell={cell}
            rowIndex={this.props.index}
            onValueChange={this.props.onValueChange}
          />
        ))}
        <td>
          {this.props.isOnlyRow ?
            null :
            <button onClick={this.handleRowRemoval}>x</button>
          }
        </td>
      </tr>
    );
  }
}

export default PickerTableRow;
