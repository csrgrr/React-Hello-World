import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

export default App;
