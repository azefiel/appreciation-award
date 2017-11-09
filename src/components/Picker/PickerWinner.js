import React from 'react';
import PropTypes from 'prop-types';
import './PickerWinner.css';

class PickerWinner extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    const month = new Date().toLocaleString('en-US', { month: 'long' });

    return (
      <div>
        <p>
          The winner for <strong>{month}</strong> is
        </p>
        <h2 className="PickerWinner-name">
          {this.props.name}
        </h2>
      </div>
    );
  }
}

export default PickerWinner;
