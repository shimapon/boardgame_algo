import React from 'react';
import '../../index.css';
import Card from './Card';

// Hand molecules
class Hand extends React.Component {
  renderHand(data,i) {
    var classNamediv;
    var classNametext;
    if(data[1]){
      classNamediv="whitecard"
      if(data[2]){
        classNametext="whitecard-text"
      }
      else{
        classNametext="blackcard-text"
      }
    }
    else{
      classNamediv="blackcard"
      if(data[2]){
        classNametext="blackcard-text"
      }
      else{
        classNametext="whitecard-text"
      }
    }


    return (
      <Card
        classNamediv={classNamediv}
        classNametext={classNametext}
        value={data[0]}
        onClick={()=>this.props.onClick(i)}
        key={'cardList' + i}
      />
    );
  }

  render() {
    return (
      <div className="hand">
        {this.props.cards.map((data, index) => {
          return this.renderHand(data, index)
        })}
      </div>
    );
  }
}

export default Hand;
