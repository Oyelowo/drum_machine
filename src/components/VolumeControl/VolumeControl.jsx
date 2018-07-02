import React from 'react';

const VolumeControl = (props) => {
    return <input
        id="vol-control"
        name="volume"
        type="range"
        min="0"
        max="1"
        step="0.01"
        {...props}></input>

}

export default VolumeControl;
