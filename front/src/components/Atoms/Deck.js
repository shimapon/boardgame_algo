import React from 'react';
import '../../index.css';

// Deck Atoms
function Deck(props){
  return(
    <div className="deck">
      <div className={props.className} onClick={()=>props.onClick()}>
      </div>
    </div>
  );
}

export default Deck;
