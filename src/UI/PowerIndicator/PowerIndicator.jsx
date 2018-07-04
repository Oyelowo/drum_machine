import React from 'react';
import './PowerIndicator.css'

const PowerIndicator = (props) => {
    let powerIndicator = props.powerOn
        ? <div className='PowerIndicator'> <div className='PowerOn'></div> 0n </div>
        : <div className='PowerIndicator'><div className='PowerOff'></div> Off</div>
    return powerIndicator
}

export default PowerIndicator;
