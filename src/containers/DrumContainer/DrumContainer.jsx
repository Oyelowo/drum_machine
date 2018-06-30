import React, {Component} from 'react';
import VolumeControl from '../../components/VolumeControl/VolumeControl';
import Pad from '../../components/Pad/Pad';

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
        audio.load()
        audio.play();
    }

    render() {
        const {volumeValue} = this.state;
        return (
            <div>
                <audio
                    id='audio'
                    src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
                <VolumeControl value={volumeValue} onChange={this.volumeChangeHandler}/>
                <button onClick={this.playSound}>Play</button>
                <Pad onClick={this.playSound}>Kick</Pad>
                <h1>{volumeValue}</h1>
            </div>
        )
    }
}

export default DrumContainer;