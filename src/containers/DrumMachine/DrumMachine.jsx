import React, {Component} from 'react';
import {connect} from "react-redux";
import Display from '../../components/Display/Display';
import DrumPad from '../DrumPad/DrumPad';
import './DrumMachine.css'
import Switch from '../../components/Switch/Switch';
import PowerIndicator from '../../UI/PowerIndicator/PowerIndicator';

class DrumMachine extends Component {
    state = {
        volumeValue: 0.4,
        powerValue: 0,
        isPowerOn: false,
        kitsStoreValue: '1'
    }

    volumeChangeHandler = (event) => {
        this.setState({volumeValue: event.target.value})
    }

    powerChangeHandler = (event) => {
        this.setState({
            powerValue: event.target.value,
            isPowerOn: !this.state.isPowerOn
        })
    }

    switchKitStoreHandler = (event) => {
        this.setState({kitsStoreValue: event.target.value})
    }

    render() {
        const {volumeValue, powerValue, isPowerOn, kitsStoreValue} = this.state;

        let volume = isPowerOn
            ? `Volume: ${ (volumeValue * 100).toFixed(0)} %`
            : '';

        let kitStoreDisplay;
        let SoundType;
        if (isPowerOn) {
            kitStoreDisplay = kitsStoreValue === '1'
                ? 'kits Store One'
                : 'kits Store Two'

            SoundType = this
                .props
                .clickedDrum
                .replace(/-/g, ' ')
        }
        let kitsStore = kitsStoreValue === '1'
            ? this.props.kitsStore1
            : this.props.kitsStore2

        let KeysSound = kitsStore.map(kit => {
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

        // let inputDisabled= isPowerOn ? 'disabled' : null

        return (
            <div id="drum-machine" className='DrumMachine'>

                <Display>
                    <div className='Toolbar Power'>
                        <div>Switch</div>
                        <Switch
                            type='range'
                            min="0"
                            max="1"
                            step="1"
                            name='powerSwitch'
                            value={powerValue}
                            onChange={this.powerChangeHandler}/>

                        <PowerIndicator className='infoDisplay' powerOn={isPowerOn}/></div>

                    <div className='Toolbar KitStore'>
                        <div>Drum Kits Stores</div>
                        <Switch
                            inputdisabled={(!isPowerOn).toString()}
                            name='KitStoreSwitch'
                            value={this.state.kitsStoreValue}
                            min='1'
                            max='2'
                            step='1'
                            onChange={this.switchKitStoreHandler}/>
                        <span className='infoDisplay'>{kitStoreDisplay}</span>
                    </div>

                    <div className='Toolbar'>

                        <span>
                            <Switch
                                inputdisabled={(!isPowerOn).toString()}
                                id="vol-control"
                                style={{
                                width: '100%'
                            }}
                                name="volume"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volumeValue}
                                onChange={this.volumeChangeHandler}/></span>

                        <span className='infoDisplay'>{volume}</span>
                    </div>

                    <div className='Toolbar'>
                        <span>SoundType:</span>
                        <span className='infoDisplay'>
                            {SoundType}</span>
                    </div>

                </Display>

                <div className='keysContainer'>{KeysSound}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {kitsStore1: state.kitsStore1, kitsStore2: state.kitsStore2, clickedDrum: state.clickedKey}
}

export default connect(mapStateToProps)(DrumMachine);