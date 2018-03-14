
import React, { Component } from 'react';
import './css/main.css';




const Main = (img) => (

  <div>
    <header>
      <h1>Hobbies</h1>
    </header>
    <img src={img} alt={img} />
    <ul>
      {
        hobbies.map(hobbie => {
          return <li key={hobbie}>{hobbie}</li>
        })
      }

    </ul>
  </div>

)




export default Main;

