import React from 'react';
import './PowerIndicator.css'

const PowerIndicator = (props) => {
    let powerIndicator = props.powerOn
        ? <div className='PowerOn'></div>
        : <div className='PowerOff'></div>
    return powerIndicator
}

export default PowerIndicator;
