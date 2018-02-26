import React from 'react';
import '../App.css';

export default function gameForm(props){
    return(
        <form>
        <h1>Enter Guess Below</h1>
        <input placeholder="Enter Guess" type="text"></input>
        <button type="submit">Submit Guess</button>
        <div className="guessCount">Guess #</div>
        <div className="guesses">Guesses:</div>
      </form>
    )
}