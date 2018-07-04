import React, {Component} from 'react';
import {connect} from "react-redux";
import Display from '../../components/Display/Display';
import DrumPad from '../DrumPad/DrumPad';
import VolumeControl from '../../components/VolumeControl/VolumeControl';
import './DrumMachine.css'
import Switch from '../../components/Switch/Switch';

class DrumMachine extends Component {
    state = {
        volumeValue: 0.4,
        powerValue: 0,
        powerOn: false
    }

    volumeChangeHandler = (event) => {
        this.setState({volumeValue: event.target.value})
    }

    powerChangeHandler = (event) => {
        this.setState({powerValue: event.target.value, powerOn: !this.state.powerOn})
    }
    render() {

        const {volumeValue, powerValue, powerOn} = this.state;
        let power = !powerOn
            ? 'off'
            : '0n';
            
            let volume = powerOn ? volumeValue : 0;
        let KeysSound = this
            .props
            .kitsStore1
            .map(kit => {
                return (
                    <DrumPad
                        drumPadId={kit.id}
                        audioVolume={volume}
                        key={kit.keyTrigger}
                        id={kit.keyTrigger}
                        src={kit.url}
                        audioTriggerKey={kit.keyTrigger}
                        drumName={kit.id}></DrumPad>
                )
            })
        return (
            <div id="drum-machine" className='DrumMachine'>
                <Switch name='powerSwitch' value={powerValue} onChange={this.powerChangeHandler}/>
                <Display>
                    <div>{power}</div>
                    {this
                        .props
                        .clickedDrum
                        .replace(/-/g, ' ')}
                    <span>{`${ (volumeValue * 100).toFixed(0)}  %`}</span>
                    <div>{this.state.powerOn.toString()}</div>
                </Display>
                <hr/>

                <Switch name='KitStoreSwitch' />
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