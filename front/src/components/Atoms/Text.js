import React from 'react';
import '../../index.css';

// Text Atoms
function Text(props){
  return(
    <p className={props.className}>{props.value}</p>
  );
}

export default Text;
