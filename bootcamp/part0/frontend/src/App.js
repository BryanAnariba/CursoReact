import './App.css';
import React from 'react';
import { Message } from './components/Message';
import { Excersice } from './components/Excersice';

function App() {
  return (
    <div className="App">
      <Message 
        msg="I am working in React Application" 
        style={ 
          { 
            color: 'green',
            fontSize: '25px',
            fontWeight: 'bold'
          } 
        }/>
      <br />
      <p>
        5+5= <Message msg={ 5 + 5 } />
      </p>
      <Excersice />
    </div>
  );
}

export default App;
