import React from 'react';
import './DrumPad.css';

const Pad = (props) => {
  return (
   <button {...props}>{props.children}</button>
  )
}

export default Pad;
