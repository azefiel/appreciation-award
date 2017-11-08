import React from 'react';
import pickWinner from './pickWinner';
import Picker from '../Picker/Picker';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.emptyRow = { name: '', total: '' };
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
    this.setState({ winner: pickWinner(this.state.rows).winner });
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

export default App;
