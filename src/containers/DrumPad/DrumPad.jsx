import './DrumPad.css';
import React, {Component} from 'react'

class DrumPad extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.keyPlaySound);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyPlaySound);
  }

  keyPlaySound = (event) => {
    // convert char to code
    let codeFromChar = (this.props.audioTriggerKey).charCodeAt()
    if (event.keyCode === codeFromChar) {
      this.playSound(this.props.id);
    }
  }

  playSound = (id) => {
    let audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();
  }
  render() {
    return (
      <button onClick={() => this.playSound(this.props.id)}>
        <audio {...this.props}></audio>
        {this.props.children}
      </button>
    )
  }
}

export default DrumPad;
