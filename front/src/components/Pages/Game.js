import React from 'react';
import '../../index.css';
import MyArea from '../Organisms/MyArea';
import Board from '../Organisms/Board';
// import Text from '../Atoms/Text';
// import { ActionCableConsumer } from 'react-actioncable-provider';


// 親コンポーネント，Game
class Game extends React.Component {

  // [カードの数字, 黒かしろか, めくられているか]
  constructor(props){
    super(props)
    this.state = {
      cards:[[0,true],[0,false],[2,false],[6,true],[10,true]],
      rightplayercards:[[0,true,false],[0,false,false],[2,false,false],[4,false,false]],
      oppoplayercards:[[0,true,true],[0,false,false],[2,false,true],[8,true,false]],
      leftplayercards:[[0,true,true],[0,false,true],[2,false,false],[3,true,false]],
      deck:[[1,true],[1,false]],
    }
  }

  // Component が Mount された後に実行されるメソッド
  componentDidMount() {

  }

  // 手札クリック時
  handleHandClick(i) {
    alert("押したよ")
    console.log(i);
  }

  handleOppoHandClick(i){
    console.log(i);
  }
  handleRightHandClick(i){
    console.log(i);
  }
  handleLeftHandClick(i){
    console.log(i);
  }

  handleDeckClick(){
    alert("Deckを押したよ")
  }

  render() {
    var nowTopclassName;
    if(this.state.deck[0][1]){
      nowTopclassName="deckwhitecard"
    }
    else{
      nowTopclassName="deckblackcard"
    }


    return (
      <div className="game">
        <Board
        onClickOppo={(i)=>this.handleOppoHandClick(i)}
        onClickRight={(i)=>this.handleRightHandClick(i)}
        onClickLeft={(i)=>this.handleLeftHandClick(i)}

        onClickDeck={()=>this.handleDeckClick()}
        rightplayercards={this.state.rightplayercards}
        oppoplayercards={this.state.oppoplayercards}
        leftplayercards={this.state.leftplayercards}
        classNameDeck={nowTopclassName}
        />
        <MyArea
          cards={this.state.cards}
          onClick={(i)=>this.handleHandClick(i)}
        /> 
      </div>
    );
  }
}
  
export default Game
