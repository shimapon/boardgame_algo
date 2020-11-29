import React from 'react';
import '../../index.css';
import Card from './Card';

// Hand molecules
class Hand extends React.Component {
  renderHand(data,i) {
    if(data[1]){
      var classNamediv="whitecard"
      if(data[2]){
        var classNametext="whitecard-text"
      }
      else{
        var classNametext="blackcard-text"
      }
    }
    else{
      var classNamediv="blackcard"
      if(data[2]){
        var classNametext="blackcard-text"
      }
      else{
        var classNametext="whitecard-text"
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
