import React from 'react';
import PropTypes from 'prop-types';
import PickerTableInput from './PickerTableInput';

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

  inputSpec = [
    { id: 'name', type: 'text', placeholder: 'Waldo' },
    { id: 'total', type: 'number', placeholder: '0' }
  ];

  handleClick = () => {
    this.props.onRowRemoval(this.props.index);
  }

  render() {
    return (
      <tr>
        {this.inputsSpec.map(input => (
          <PickerTableInput
            key={input.id}
            value={this.props.row[input.id]}
            input={input}
            rowIndex={this.props.index}
            onValueChange={this.props.onValueChange}
          />
        ))}
        <td>
          {this.props.isOnlyRow ?
            null :
            <button onClick={this.handleClick}>x</button>
          }
        </td>
      </tr>
    );
  }
}

export default PickerTableRow;
