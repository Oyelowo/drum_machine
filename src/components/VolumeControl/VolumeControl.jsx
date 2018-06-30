import React from 'react'

const VolumeControl = () => {
    return <input
        id="vol-control"
        name="volume"
        type="range"
        min="0"
        max="1"
        step="0.1"
        va
        oninput="SetVolume(this.value)"
        onchange="SetVolume(this.value)"
        {...props}></input>

}

export default VolumeControl;
