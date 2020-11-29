import React from 'react';
import '../../index.css';
import Hand from './Hand';

// Card molecules
function OppoPlayer(props){
  return(
      <div className="oppoplayer">
        <Hand
        cards={props.cards.reverse()}
        onClick={(i)=>props.onClick(i)}
        />
      </div>
  );
}

export default OppoPlayer;
