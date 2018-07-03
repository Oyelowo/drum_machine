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
                        btnClass='drum-pad'
                        audioClass='clip'
                        key={kit.keyTrigger}
                        id={kit.keyTrigger}
                        src={kit.url}
                        audioTriggerKey={kit.keyTrigger}>
                        {kit.keyTrigger}</DrumPad>
                )
            })
        return (
            <div id="drum-machine">

                <VolumeControl value={volumeValue} onChange={this.volumeChangeHandler}/>
                <Display>{this.props.clickedKey}
                </Display>
                {KeysSound}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {kitsStore1: state.kitsStore1, kitsStore2: state.kitsStore2, clickedKey: state.clickedKey}
}

export default connect(mapStateToProps)(DrumMachine);