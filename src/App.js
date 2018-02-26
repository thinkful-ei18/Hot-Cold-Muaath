import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameForm from './components/gameform';
import NavBar from './components/navbar'

class App extends Component {
  render() {
    

    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hot and Cold</h1>
          <NavBar/>
        </header>
        <main className="container"> 
       <GameForm/>
        </main>

      </div>
    );
  }
}

export default App;
