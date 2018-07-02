import React, {Component} from 'react';
import VolumeControl from '../../components/VolumeControl/VolumeControl';
import DrumPad from '../../components/Pad/DrumPad';
import Display from '../../components/Display/Display';
import { connect } from "react-redux";
class DrumContainer extends Component {
    state = {
        volumeValue: ''
    }

    // componentDidMount(){     let audio = document.getElementById('audio');
    // audio.load(); }
    volumeChangeHandler = (event) => {
        let audio = document.getElementById('audio');
        audio.volume = event.target.value;
        this.setState({volumeValue: event.target.value})
    }

    playSound = () => {
        let audio = document.getElementById('audio');
        // audio.load()
        audio.play();
    }

    render() {
        const {volumeValue} = this.state;
        return (
            <div d="drum-machine">
                <audio
                    id='audio'
                    src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
                <VolumeControl value={volumeValue} onChange={this.volumeChangeHandler}/>
                <button onClick={this.playSound}>Play</button>
                <Display/>
                <DrumPad onClick={this.playSound}>Kick</DrumPad>
                <h1>{(volumeValue*100).toFixed(0)}</h1>
            </div>
        )
    }
}

const mapStateToProps=state=>{
   return {
       kitsStore1: state.kitsStore1,
       kitsStore2: state.kitsStore2
   }
}

export default connect(mapStateToProps)(DrumContainer);