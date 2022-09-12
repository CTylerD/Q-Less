import React from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup.js';
import newGame from './Board.js';
import { diceArray, currentBoardState } from './Board.js';
import axios from 'axios';

function saveGame () {
    let savedGame = {"dice": diceArray,
    "words": [],
    "board": currentBoardState
    }
    axios.post('http://localhost:5555/save', savedGame)
        .then(response => {console.log(response)})
        .catch(error => {console.log(error);})
    
    return newGame;
}


function Navigation() {
    return (
        <nav className="App-link">
            <Link to="/">
              <button className="Nav-link" onClick={newGame()}>New Game</button>
            </Link>
            <Link to="/">
              <button className="Nav-link" onClick={saveGame}>Save Game</button>
            </Link>
              <Popup />
          <Link to="/">
            <button className="Nav-link" to="/recent">View Recent Games</button>
          </Link>
        </nav>
    );
}

export default Navigation;