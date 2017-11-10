import React from 'react';
import PropTypes from 'prop-types';

class PickerTableInput extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    input: PropTypes.shape({
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
      this.props.input.id,
      event.target.value
    );
  }

  componentDidMount = () => {
    this.props.input.id === 'name' && this.elementInput.focus();
  }

  render() {
    return (
      <td>
        <input
          value={this.props.value}
          {...this.props.input}
          onChange={this.handleChange}
          ref={element => this.elementInput = element}
        />
      </td>
    );
  }
}

export default PickerTableInput;
