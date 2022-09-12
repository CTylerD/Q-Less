import * as React from "react";
import * as ReactDOM from "react-dom";
import { Popup } from 'reactjs-popup';
import "../App.css";

export default function PopupComponent() {
  /* Change left or top value to reposition the popup */
  const offset = {
    left: 150,
    top: 300,
  };
  return (
    <Popup trigger={<button className="Nav-link">Rules</button>} offset={offset}>
    <div className="popup">Welcome to Q-Less!<br></br>
    The rules of the game are as follows:<br></br><br></br>
    • Use the given tiles to form words<br></br>
    • Each word must be at least 3 letters long<br></br>
    • All of the placed tiles must be connected<br></br>
    • Your end result will look like a crossword<br></br>
    • Continue until you use all of the letters<br></br>
    • Scrabble dictionary words only<br></br><br></br>
    !!! Have fun !!!<br></br>
    </div>
  </Popup>
  );
};
