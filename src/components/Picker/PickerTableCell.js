import React from 'react';
import PropTypes from 'prop-types';

class PickerTableCell extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    cell: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired
    }).isRequired,
    rowIndex: PropTypes.number.isRequired,
    onValueChange: PropTypes.func.isRequired
  };

  handleChange = event => {
    this.props.onValueChange(
      this.props.rowIndex,
      this.props.cell.id,
      event.target.value
    );
  }

  render() {
    return (
      <td>
        <input
          value={this.props.value}
          {...this.props.cell}
          onChange={this.handleChange}
        />
      </td>
    );
  }
}

export default PickerTableCell;
