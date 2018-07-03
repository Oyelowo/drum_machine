import React, {Component} from 'react';
import VolumeControl from '../../components/VolumeControl/VolumeControl';
import DrumPad from '../../components/DrumPad/DrumPad';
import Display from '../../components/Display/Display';
import {connect} from "react-redux";
class DrumContainer extends Component {
    state = {
        volumeValue: 0
    }

    componentDidMount() {
        // let audio = document.getElementsByTagName('audio');
        // console.log(audio.item(1).volume); console.log(this.props)
        document.addEventListener('keydown', this.keyPlaySound)

    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyPlaySound)
    }

    keyPlaySound = (event) => {
        for (let el of this.props.kitsStore1) {
            //   console.log(el)
            // convert String to char
            let keyChar = (el.keyTrigger).charCodeAt()
            if (event.keyCode === keyChar) {
                this.playSound(el.id);
            }
        }
    }
    // componentDidMount(){     let audio = document.getElementById('audio');
    // audio.load(); }
    volumeChangeHandler = (event) => {
        let audios = document.getElementsByTagName('audio');
        // console.log(audios)
        for(let audio of audios){
            audio.volume = event.target.value;
        }
        
        this.setState({volumeValue: event.target.value})
    }

    playSound = (id) => {
        let audio = document.getElementById(id);
        audio.volume = this.state.volumeValue
        // console.log(audio)
        audio.currenTime = 0;
        audio.play();
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
                        onClick={() => this.playSound(kit.id)}
                        className={kit.id}>{kit.keyTrigger}
                        <audio id={kit.id} className={kit.id} src={kit.url}></audio>
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