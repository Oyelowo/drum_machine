import React from 'react';
import './PowerIndicator.css'

const PowerIndicator = (props) => {
    let powerIndicator = props.powerOn
        ? <div>
                <span className='PowerIndicator'>
                    <span className='PowerOn'></span>
                    0n
                </span>
            </div>
        : <div>
            <span className='PowerIndicator'>
                <span className='PowerOff'></span>
                Off</span>
        </div>
    return powerIndicator
}

export default PowerIndicator;
