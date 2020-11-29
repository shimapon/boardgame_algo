import React from 'react';
import '../../index.css';
import Text from '../Atoms/Text';

// Card molecules
function Card(props){
  return(
    <div className={props.classNamediv} onClick={props.onClick}>
        <Text
            className={props.classNametext}
            value={props.value}
        />
    </div>
  );
}

export default Card;
