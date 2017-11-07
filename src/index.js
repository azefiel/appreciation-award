import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

const devRows = [{
  name: 'paul',
  total: 5
},{
  name: 'henry',
  total: 3
},{
  name: 'mathieu',
  total: 1
}];

ReactDOM.render(<App rows={devRows} />, document.getElementById('root'));
