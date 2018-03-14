import React from 'react';
import Header from './Header';
import Main from './Main';


const img ='mifoto.jpg';



const App = () => (
  <div>
    <Header />
    <Main  hobbies={hobbies} img={img} />
   
  </div>
)

export default App
