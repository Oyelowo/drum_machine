import React, {Component} from 'react'

export default class Testdrum extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.keyPlaySound)

    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyPlaySound)
    }

    keyPlaySound = (event) => {
        let keyChar = (this.props.keyTrigger).charCodeAt()
        if (event.keyCode === keyChar) {
            this.playSound();
        }

    }
    // componentDidMount(){     let audio = document.getElementById('audio');
    // audio.load(); }
    // volumeChangeHandler = (event) => {
    //     let audios = document.getElementsByTagName('audio');
    //     for (let audio of audios) {
    //         audio.volume = event.target.value;
    //     }

    //     this.setState({volumeValue: event.target.value})
    // }

    playSound = () => {
        // let audio = document.getElementById(this.props.id);
        // audio.volume = this.state.volumeValue console.log(audio)
        // this.audio.load()
        this.audio.currenTime = 0;
        this.audio.play();
    }

    render() {
        return (
            <button onClick={this.playSound}>
                <audio id={this.props.id} src={this.props.url}  ref={ref => this.audio = ref}></audio>
                {this.props.keyTrigger}
            </button>
        )
    }
}
