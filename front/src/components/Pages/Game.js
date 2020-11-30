import React from 'react';
import '../../index.css';
import MyArea from '../Organisms/MyArea';
import Board from '../Organisms/Board';

import { ActionCableConsumer } from 'react-actioncable-provider';



let myindex=-1;

// 親コンポーネント，Game
class Game extends React.Component {

  // [カードの数字, 黒かしろか, めくられているか]
  constructor(props){
    super(props)
    this.handleReceived = this.handleReceived.bind(this);
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

  handleConnected() {
    console.log('successfully connected to cable! woohoo!');
  }

  handleReceived(message) {
    console.log("Game:message来た: ");
    console.log(message);

    let pcards=[]
    let cards=[]

    /* 命令ごとの処理 */
    // 山札から引いた
    if (message[0]===0){

    }
    // 手札めくった
    else if (message[0]===1){

    }
    // 手札さした
    else if (message[0]===2){

    }
    // 最初登録
    else if (message[0]===3){
      if(myindex===-1){
        if (message[1][2].length>=1){
          myindex=2
        }
        else if(message[1][1].length>=1){
          myindex=1
        }
        else if(message[1][0].length>=1){
          myindex=0
        }
      }

      let mycard=message[1][myindex]

      for (let t of message[1]){
        for (let m of t) {
          var mpush=m.concat([false]);
          cards.push(mpush)
        }
        pcards.push(cards)
        cards=[]
      }

      console.log(mycard);
      console.log(pcards);

      if (myindex===0){
        this.setState({
          cards:mycard,
          rightplayercards:pcards[1],
          oppoplayercards:pcards[2],
          deck:message[2]
        })
      }
      else if(myindex===1){
        this.setState({
          leftplayercards:pcards[0],
          cards:mycard,
          rightplayercards:pcards[2],
          deck:message[2]
        })
      }
      else if(myindex===2){
        this.setState({
          leftplayercards:pcards[0],
          oppoplayercards:pcards[1],
          cards:mycard,
          deck:message[2]
        })
      }
    }
  }

  // 手札クリック時
  handleHandClick(i) {
    let message = [1, myindex, this.state.cards[0]]
    this.refs.roomChannel.perform('handle_click', {message}) 
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
    let message = [0, myindex, this.state.deck[0]]
    this.refs.roomChannel.perform('handle_click', {message}) 
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
        {
        this.acc || (this.acc = <ActionCableConsumer
            ref='roomChannel'
            channel={{channel: 'RoomChannel'}}
            onConnected={this.handleConnected}
            onReceived={this.handleReceived}
        />)
        }
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
