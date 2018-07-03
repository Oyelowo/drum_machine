import './DrumPad.css';
import React, {Component} from 'react';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import Auxi from '../../hoc/Auxi';

class DrumPad extends Component {
  state = {
    clickedKey: ''
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyPlaySound);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyPlaySound);
  }

  keyPlaySound = (event) => {
    const {id, audioTriggerKey, audioVolume, drumName} = this.props
    // convert char to code
    let codeFromChar = (audioTriggerKey).charCodeAt()
    if (event.keyCode === codeFromChar) {
      this
        .props
        .onPlaySound(id, audioVolume, drumName);
    }
  }

  // playSound = (id) => {   let audio = document.getElementById(id);
  // audio.currentTime = 0;   audio.play();   this.setState({clickedKey: id}) }
  render() {
    const {
      drumName,
      onPlaySound,
      drumPadId,
      id,
      audioVolume,
      src
    } = this.props
    return (
      <Auxi>
        <button
          id={drumPadId}
          className='drum-pad'
          onClick={() => onPlaySound(id, audioVolume, drumName)}>
          {id}
          <audio className='clip' id={id} src={src}></audio>
        </button>
      </Auxi>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlaySound: (audioId, audioVolume, drumName) => dispatch(actions.playSound(audioId, audioVolume, drumName))
  }
}

export default connect(null, mapDispatchToProps)(DrumPad);
