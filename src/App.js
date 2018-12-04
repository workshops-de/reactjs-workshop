import React, { Component } from 'react';
import NameRaw from './components/NameRaw';
import Name from './components/Name';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Name />
        <NameRaw />
      </div>
    );
  }
}

export default App;
