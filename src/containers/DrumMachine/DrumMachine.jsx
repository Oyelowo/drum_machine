import React, {Component} from 'react';
import {connect} from "react-redux";
import Display from '../../components/Display/Display';
import DrumPad from '../DrumPad/DrumPad';
import VolumeControl from '../../components/VolumeControl/VolumeControl';

class DrumMachine extends Component {
    state = {
        volumeValue: 0
    }

    render() {

        const {volumeValue} = this.state;

        let KeysSound = this
            .props
            .kitsStore1
            .map(kit => {
                return (
                    <DrumPad
                        key={kit.keyTrigger}
                        id={kit.keyTrigger}
                        src={kit.url}
                        audioTriggerKey={kit.keyTrigger}>
                        {kit.keyTrigger}</DrumPad>
                )
            })
        return (
            <div id="drum-machine">

                <VolumeControl value={volumeValue} onChange={this.volumeChangeHandler}/> {/* <button onClick={this.playSound}>Play</button> */}
                <Display/>
                <h1>{(volumeValue * 100).toFixed(0) + '%'}</h1>
                {KeysSound}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {kitsStore1: state.kitsStore1, kitsStore2: state.kitsStore2}
}

export default connect(mapStateToProps)(DrumMachine);