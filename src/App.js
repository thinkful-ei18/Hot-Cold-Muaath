import React, { Component } from 'react';
import './App.css';
import GameForm from './components/gameform';
import NavBar from './components/navbar';
import Banner from './components/banner';

class App extends Component {
  render() {
    

    
    return (
      <div className ="App">
        <Banner/>
        <NavBar/>
       <GameForm/>
       </div>
    );
  }
}

export default App;
