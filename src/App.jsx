import React, {Component} from 'react';
import './App.css';
import DrumContainer from './containers/DrumContainer/DrumContainer';

class App extends Component {
  render() {
    return (
      <div className="App" id="drum-machine">
        <DrumContainer/>
      </div>
    );
  }
}

export default App;
