import React from 'react';
import './Switch.css';

const Switch = (props) => {
    return (
        <div>
            <input  className='Switch' type="range" min="0" max="1" step="1" {...props}/>
        </div>
    )
}

export default Switch;
