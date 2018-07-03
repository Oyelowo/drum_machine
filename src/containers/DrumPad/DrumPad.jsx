import './DrumPad.css';
import React, {Component} from 'react';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

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
    // convert char to code
    let codeFromChar = (this.props.audioTriggerKey).charCodeAt()
    if (event.keyCode === codeFromChar) {
      this
        .props
        .onPlaySound(this.props.id);
    }
  }

  // playSound = (id) => {   let audio = document.getElementById(id);
  // audio.currentTime = 0;   audio.play();   this.setState({clickedKey: id}) }
  render() {
    return (
      <button
        className={this.props.btnClass}
        onClick={() => this.props.onPlaySound(this.props.id)}>
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
    onPlaySound: (id) => dispatch(actions.playSound(id))
  }
}

export default connect(null, mapDispatchToProps)(DrumPad);
