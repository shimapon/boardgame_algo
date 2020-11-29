import React from 'react';
import '../../index.css';
import RightPlayer from '../Molucules/RightPlayer';
import OppoPlayer from '../Molucules/OppoPlayer';
import LeftPlayer from '../Molucules/LeftPlayer';
import Deck from '../Atoms/Deck';


// Hand molecules
class Board extends React.Component {

  render() {
    return (
      <div className="board">
        <OppoPlayer
          cards={this.props.oppoplayercards}
          onClick={(i)=>this.props.onClickOppo(i)}
        />
        <div className="wrapper">
          <LeftPlayer
            cards={this.props.leftplayercards}
            onClick={(i)=>this.props.onClickLeft(i)}
          />
          <div>
            <h1>algo</h1>
            <Deck
            className={this.props.classNameDeck}
            onClick={()=>this.props.onClickDeck()}
            />
          </div>
          <RightPlayer
            cards={this.props.rightplayercards}
            onClick={(i)=>this.props.onClickRight(i)}
          />
        </div>
      </div>
    );
  }
}

export default Board;
