import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Clock style = {{display:"flex", flexDirection:"row", justifyContent:"center"}} autocomplete={true}>
         <Hour/>
         <Minute style ={{color:"green", fontSize:"30"}}/>
       </Clock>
      </div>
    )
  }
}

export default App;
