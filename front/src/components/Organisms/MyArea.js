import React from 'react';
import '../../index.css';
import Card from '../Molucules/Card';

// Hand molecules
class MyArea extends React.Component {
  renderHand(data,i) {
    if(data[1]){
      var classNamediv="whitecard"
      var classNametext="whitecard-text"
    }
    else{
      var classNamediv="blackcard"
      var classNametext="blackcard-text"
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
      <div className="myarea">
        {this.props.cards.map((data, index) => {
          return this.renderHand(data,index)
        })}
      </div>
    );
  }
}

export default MyArea;
