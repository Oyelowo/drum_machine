import React, {Component} from 'react';
import {connect} from "react-redux";
import Display from '../../components/Display/Display';
import DrumPad from '../DrumPad/DrumPad';
import VolumeControl from '../../components/VolumeControl/VolumeControl';
import './DrumMachine.css'

class DrumMachine extends Component {
    state = {
        volumeValue: 0.2
    }

    volumeChangeHandler = (event) => {
        this.setState({volumeValue: event.target.value})
    }
    render() {

        const {volumeValue} = this.state;

        let KeysSound = this
            .props
            .kitsStore1
            .map(kit => {
                return (
                    <DrumPad
                        drumPadId={kit.id}
                        audioVolume={volumeValue}
                        key={kit.keyTrigger}
                        id={kit.keyTrigger}
                        src={kit.url}
                        audioTriggerKey={kit.keyTrigger}
                        drumName={kit.id}></DrumPad>
                )
            })
        return (
            <div id="drum-machine" className='DrumMachine'>
                <Display>{this.props.clickedDrum.replace(/-/g, ' ')} 
                <span>{`${(volumeValue * 100).toFixed(0)}  %`}</span>
                </Display>
                <hr/>
                <VolumeControl value={volumeValue} onChange={this.volumeChangeHandler}/> 
                <div className='keysContainer'>{KeysSound}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {kitsStore1: state.kitsStore1, kitsStore2: state.kitsStore2, clickedDrum: state.clickedKey}
}

export default connect(mapStateToProps)(DrumMachine);