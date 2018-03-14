
import React, { Component } from 'react';
import './css/main.css';
import mifoto from './images/mifoto.jpg';



const Main = () => (

  <div>
    <header>
      <h1>Hobbies</h1>
    </header>
    <img className='mifoto' src={mifoto} alt='mi foto'></img>
    <p>Escuchar música</p>
  </div>

)




export default Main;

