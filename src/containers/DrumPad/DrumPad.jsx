import './DrumPad.css';
import React, {Component} from 'react';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

class DrumPad extends Component {
  state = {
    clickedKey: ''
  }

  componentDidMount() {
    document.addEventListener('keydown', (event) => this.keyPlaySound(event, this.props.id, this.props.audioTriggerKey, this.props.audioVolume));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', (event) => this.keyPlaySound(event, this.props.id, this.props.audioTriggerKey, this.props.audioVolume));
  }

  keyPlaySound = (event, id, audioTriggerKey, volume) => {
    // convert char to code
    let codeFromChar = (audioTriggerKey).charCodeAt()
    if (event.keyCode === codeFromChar) {
      this
        .props
        .onPlaySound(id, volume);
    }
  }

  // playSound = (id) => {   let audio = document.getElementById(id);
  // audio.currentTime = 0;   audio.play();   this.setState({clickedKey: id}) }
  render() {
    return (
      <button
        className={this.props.btnClass}
        onClick={() => this.props.onPlaySound(this.props.id, this.props.audioVolume)}>
        {this.props.children}
        <audio
          className={this.props.audioClass}
          id={this.props.id}
          src={this.props.src}></audio>

      </button>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlaySound: (id, audioVolume) => dispatch(actions.playSound(id, audioVolume))
  }
}

export default connect(null, mapDispatchToProps)(DrumPad);
