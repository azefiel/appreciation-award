import React from 'react';
import Picker from '../Picker/Picker';
import './App.css';

class App extends React.Component {
  emptyRow = { name: '', total: '' }

  constructor(props) {
    super(props);
    this.state = { winner:'', rows: [{ ...this.emptyRow }] };
  }

  handleValueChange = (index, type, value) => {
    let newRows = [...this.state.rows];
    newRows[index][type] = value;
    this.setState({ rows: newRows });
  }

  handleRowAddition = () => {
    const newRows = [...this.state.rows, { ...this.emptyRow }];
    this.setState({ rows: newRows });
  }

  handleRowRemoval = index => {
    let newRows = [...this.state.rows];
    newRows.splice(index, 1);
    this.setState({ rows: newRows });
  }

  handleWinnerPick = () => {
    this.setState({ winner: pickWinner(this.state.rows) });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Appreciation Award
          </h1>
        </header>
        {this.state.winner ?
          null :
          <p className="App-info">
            This app will help you pick a winner for the Appreciation Award.
            <br />
            Enter the names of the helpers and the total of times they helped out.
            <br />
            Now just click the button and a winner will be picked automatically!
          </p>
        }
        <Picker
          rows={this.state.rows}
          winner={this.state.winner}
          onValueChange={this.handleValueChange}
          onRowAddition={this.handleRowAddition}
          onRowRemoval={this.handleRowRemoval}
          onWinnerPick={this.handleWinnerPick}
        />
      </div>
    );
  }
}

/**
 * Builds a bucket of items in proportion to their `total` and randomely picks a
 * winner out of that bucket.
 * @param  {Array} rows List of rows
 * @return {String}     Name of the winner
 */
function pickWinner(rows) {
  const bucket = rows.reduce((bucket, row) => {
    const total = parseInt(row.total, 10);
    for (var i = 0; i < total; i++) {
      bucket.push(row.name);
    }
    return bucket;
  }, []);
  const randomIndex = Math.floor(Math.random() * (bucket.length - 1));
  return bucket[randomIndex];
}

export default App;
