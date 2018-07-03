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
    const {onPlaySound, drumPadId, id, audioVolume, src}= this.props
    return (
      <button
      id={drumPadId}
        className='drum-pad'
        onClick={() => onPlaySound(id, audioVolume)}>
        {id}
        <audio
          className='clip'
          id={id}
          src={src}></audio>
      </button>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlaySound: (audioId, volume) => dispatch(actions.playSound(audioId, volume))
  }
}

export default connect(null, mapDispatchToProps)(DrumPad);
