import React from 'react';
import PropTypes from 'prop-types';
import PickerTableCell from './PickerTableCell';

class PickerTableRow extends React.Component {
  static propTypes = {
    row: PropTypes.shape({
      name: PropTypes.string.isRequired,
      total: PropTypes.string.isRequired
    }),
    isOnlyRow: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    onValueChange: PropTypes.func.isRequired,
    onRowRemoval: PropTypes.func.isRequired
  };

  cellsSpec = [{
    id: 'name',
    type: 'text',
    placeholder: 'Waldo'
  }, {
    id: 'total',
    type: 'number',
    placeholder: '0'
  }];

  handleRowRemoval = () => {
    this.props.onRowRemoval(this.props.index);
  }

  render() {
    return (
      <tr>
        {this.cellsSpec.map(cell => (
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
