import React from 'react';
import './Pad.css';

const Pad = (props) => {
  return (
   <button {...props}>{props.children}</button>
  )
}

export default Pad;
