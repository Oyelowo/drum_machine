import React from 'react';
import './Switch.css';

const Switch = (props) => {
    return <input className='Switch' type="range" {...props}/>
}

export default Switch;
