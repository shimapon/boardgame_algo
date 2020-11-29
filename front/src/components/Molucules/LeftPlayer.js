import React from 'react';
import '../../index.css';
import Hand from './Hand';

// Card molecules
function LeftPlayer(props){
  return(
    <div className="leftplayer">
        <Hand
        cards={props.cards}
        onClick={(i)=>props.onClick(i)}

        />
    </div>
  );
}

export default LeftPlayer;
