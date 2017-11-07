import React from 'react';
import Picker from '../Picker/Picker';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Appreciation Award
        </h1>
      </header>
      <p className="App-info">
        This app will help you pick a winner for the Appreciation Award.
        <br />
        Enter the names of the helpers and the total of times they helped out.
        <br />
        Now just click the button and a winner will be picked automatically!
      </p>
      <Picker rows={props.rows} />
    </div>
  );
}

export default App;
