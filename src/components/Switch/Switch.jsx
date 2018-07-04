import React from 'react';
import './Switch.css';

const Switch = (props) => {
    let inputElement = props.inputdisabled == 'true'
        ? <input className='Switch' type="range" disabled {...props}/>
        : <input className='Switch' type="range" {...props}/>
    return inputElement;
}

export default Switch;
