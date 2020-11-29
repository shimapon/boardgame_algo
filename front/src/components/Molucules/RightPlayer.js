import React from 'react';
import '../../index.css';
import Hand from './Hand';

// Card molecules
function RightPlayer(props){
  return(
    <div className="rightplayer">
        <Hand
          cards={props.cards.reverse()}
          onClick={(i)=>props.onClick(i)}
        />
    </div>
  );
}

export default RightPlayer;
