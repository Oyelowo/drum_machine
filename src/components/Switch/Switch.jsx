import React from 'react';
import './Switch.css';

const Switch = (props) => {
    return (
        <div>
            <input  className='Switch' type="range" {...props}/>
        </div>
    )
}

export default Switch;
