import React from 'react';
import '../../index.css';
import Game from './Game';
import { ActionCableProvider } from 'react-actioncable-provider';


class App extends React.Component {

  render(){
    return(
      <div>
        <ActionCableProvider url="http://localhost:4000/cable">
          <Game/>
        </ActionCableProvider>
      </div>
    )
  }
}


export default App
