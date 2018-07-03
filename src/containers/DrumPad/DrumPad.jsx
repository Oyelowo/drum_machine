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
    const {onPlaySound, id, audioVolume, children, src}= this.props
    return (
      <div>
      <button
        className='drum-pad'
        onClick={() => onPlaySound(id, audioVolume)}>
        {children}
        <audio
          className='clip'
          id={id}
          src={src}></audio>

      </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlaySound: (id, volume) => dispatch(actions.playSound(id, volume))
  }
}

export default connect(null, mapDispatchToProps)(DrumPad);
