import React from 'react';
import PropTypes from 'prop-types';
import PickerTable from './PickerTable';
import PickerWinner from './PickerWinner';
import './Picker.css';

class Picker extends React.Component {
  static propTypes = {
    rows: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      total: PropTypes.string.isRequired
    })).isRequired,
    winner: PropTypes.string.isRequired,
    onValueChange: PropTypes.func.isRequired,
    onRowAddition: PropTypes.func.isRequired,
    onRowRemoval: PropTypes.func.isRequired,
    onWinnerPick: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="Picker">
      {this.props.winner ?
        <PickerWinner name={this.props.winner} /> : (
        <div>
          <PickerTable
            rows={this.props.rows}
            onValueChange={this.props.onValueChange}
            onRowAddition={this.props.onRowAddition}
            onRowRemoval={this.props.onRowRemoval}
          />
          <p>
            <button
              className="Picker-button"
              onClick={this.props.onWinnerPick}
            >
              Pick a Winner
            </button>
          </p>
        </div>
      )}
      </div>
    );
  }
}

export default Picker;
