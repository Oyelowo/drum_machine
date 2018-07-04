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
        powerOn: false,
        kitsStoreValue: 1
    }

    volumeChangeHandler = (event) => {
        this.setState({volumeValue: event.target.value})
    }

    powerChangeHandler = (event) => {
        this.setState({
            powerValue: event.target.value,
            powerOn: !this.state.powerOn
        })
    }

    switchKitStoreHandler = (event) => {
        this.setState({kitsStoreValue: event.target.value})
    }
    render() {

        const {volumeValue, powerValue, powerOn, kitsStoreValue} = this.state;
        let power = !powerOn
            ? 'off'
            : '0n';

        let volume = powerOn
            ? volumeValue
            : 0;

        let kitStoreDisplay = kitsStoreValue == 1
            ? 'kits Store One'
            : 'kits Store Two'
        let kitsStore = kitsStoreValue === '1'
            ? this.props.kitsStore1
            : this.props.kitsStore2
        let KeysSound = kitsStore.map(kit => {
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
                <Switch
                    min="0"
                    max="1"
                    step="1"
                    name='powerSwitch'
                    value={powerValue}
                    onChange={this.powerChangeHandler}/>
                <Display>
                    <div>{power}</div>
                    {this
                        .props
                        .clickedDrum
                        .replace(/-/g, ' ')}
                    <span>{`${ (volumeValue * 100).toFixed(0)}  %`}</span>
                    <div>{this
                            .state
                            .powerOn
                            .toString()}</div>

                    <div>{kitStoreDisplay}</div>
                </Display>
                <hr/>

                <Switch
                    name='KitStoreSwitch'
                    value={this.state.kitsStoreValue}
                    min='1'
                    max='2'
                    step='1'
                    onChange={this.switchKitStoreHandler}/>

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