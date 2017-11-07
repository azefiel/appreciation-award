import React from 'react';

class PickerTableCell extends React.Component {
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
