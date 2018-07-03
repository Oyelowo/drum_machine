import React, {Component} from 'react';
import DrumMachine from './containers/DrumMachine/DrumMachine';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" id="drum-machine">
        <DrumMachine />
      </div>
    );
  }
}

export default App;
