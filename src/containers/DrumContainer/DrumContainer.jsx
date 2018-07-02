import React, {Component} from 'react';
import VolumeControl from '../../components/VolumeControl/VolumeControl';
import DrumPad from '../../components/DrumPad/DrumPad';
import Display from '../../components/Display/Display';
import {connect} from "react-redux";
class DrumContainer extends Component {
    state = {
        volumeValue: ''
    }

    // componentDidMount(){     let audio = document.getElementById('audio');
    // audio.load(); }
    volumeChangeHandler = (event) => {
        let audio = document.getElementsByTagName('audio');
        audio.volume = event.target.value;
        this.setState({volumeValue: event.target.value})
    }

    playSound = (id) => {
        let audio = document.getElementById(id);
        console.log(audio)
        audio.load()
        audio.currenTime = 0;
        audio.play();
    }

    render() {
        let audio = document.getElementById('Heater-1');
        console.log(audio)
        const {volumeValue} = this.state;

        let KeysSound = this
            .props
            .kitsStore1
            .map(kit => {
                return (
                    <DrumPad key={kit.keyCode} onClick={()=>this.playSound(kit.id)} className={kit.id}>{kit.keyTrigger}
                        <audio
                            id={kit.id}
                            className={kit.id}
                            src={kit.url}></audio>
                    </DrumPad>
                )
            })
        return (
            <div d="drum-machine">

                <VolumeControl value={volumeValue} onChange={this.volumeChangeHandler}/> {/* <button onClick={this.playSound}>Play</button> */}
                <Display/>
                <h1>{(volumeValue * 100).toFixed(0) + '%'}</h1>
                {/* <DrumPad onClick={()=>this.playSound('audio')} >'lgl'
                        <audio
                            id='audio'
                            src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'></audio>
                    </DrumPad> */}
                {KeysSound}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {kitsStore1: state.kitsStore1, kitsStore2: state.kitsStore2}
}

export default connect(mapStateToProps)(DrumContainer);