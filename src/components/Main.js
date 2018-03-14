
import React, { Component } from 'react';
import './css/main.css';
import mifoto from './images/mifoto.jpg';



class Main extends Component {
  render() {
    const styleText = fontFamily()
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hobbies</h1>
        </header>
        <img className='mifoto' src={mifoto} alt='mi foto'></img>
        <p>Escuchar música</p>
      </div>

    );
  }
}



export default Main;

