import React from 'react';
import Guess from './guess.js'
import './Form.css';

export default function gameForm(props){
    return(
        <main className="container"> 
        <form>
        <h1>Enter Guess Below</h1>
        <input placeholder="Enter Guess" type="text"></input>
        <button type="submit">Submit Guess</button>
        <Guess/>
      </form>
      </main>
    )
}