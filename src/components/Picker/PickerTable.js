import React from 'react';
import PropTypes from 'prop-types';
import PickerTableRow from './PickerTableRow';
import './PickerTable.css';

class PickerTable extends React.Component {
  static propTypes = {
    rows: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      total: PropTypes.string.isRequired
    })).isRequired,
    onValueChange: PropTypes.func.isRequired,
    onRowAddition: PropTypes.func.isRequired,
    onRowRemoval: PropTypes.func.isRequired
  };

  handleClick = () => {
    this.props.onRowAddition();
  }

  render () {
    const isNotOnlyRow = this.props.rows.length > 1;

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
              isNotOnlyRow={isNotOnlyRow}
              index={index}
              onValueChange={this.props.onValueChange}
              onRowRemoval={this.props.onRowRemoval}
            />
          ))}
          <tr>
            <td>
              <button onClick={this.handleClick}>+</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default PickerTable;
