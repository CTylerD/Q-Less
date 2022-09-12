import BoardSquare from "../components/BoardSquare.js"
import {Dice, rollDice} from "../components/Dice.js"
import {useState, useRef} from "react";
import axios from 'axios';

export let diceArray, boardArray, currentBoardState;

export function newGame () {
  diceArray = rollDice();
  boardArray = buildBoard();
  currentBoardState = diceArray.concat([null, null, null, null, null, null, null, null, null, null, null, null,
                                        null, null, null, null, null, null, null, null, null, null, null, null,
                                        null, null, null, null, null, null, null, null, null, null, null, null,
                                        null, null, null, null, null, null, null, null, null, null, null, null,
                                        null, null, null, null, null, null, null, null, null, null, null, null,
                                        null, null, null, null, null, null, null, null, null, null, null, null,
                                        null, null, null, null, null, null, null, null, null, null, null, null,
                                        null, null, null, null, null, null, null, null, null, null, null, null,
                                        null, null, null, null, null, null, null, null, null, null, null, null,
                                        null, null, null, null, null, null, null, null, null, null, null, null,
                                        null, null, null, null, null, null, null, null, null, null, null, null]);
}

function buildBoard() {
  boardArray = [];
  for (let i = 0; i < 12; i++) {
      for (let j = 0; j < 12; j++) {
          if (i === 0) {
              boardArray.push(<div id={`${j}-${i}`} className="boardsquare"><div className="dice">{diceArray[j]}</div></div>);
          } else {
              boardArray.push(<div id={`${j}-${i}`} className="boardsquare"></div>);
          }
      }
  }
  return boardArray;
}

export default function Board() {
    const boardRef = useRef(null);
    newGame();
    let activeDice = null;

    function grabPiece(e) {
        const element = e.target;
        const board = boardRef.current;
        
        if (element.classList.contains("dice") && board) {
            const x = e.clientX - 30;
            const y = e.clientY - 30;

            element.style.position = "absolute";
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
            
            activeDice = element
            
        }
    }

    function movePiece(e) {
        const board = boardRef.current;
        if (activeDice && board) { 

            const minX = board.offsetLeft;
            const minY = board.offsetTop;
            const maxX = board.offsetLeft + board.clientWidth - 45;
            const maxY = board.offsetTop + board.clientHeight - 45;
            const x = e.clientX - 30;
            const y = e.clientY - 30;
            activeDice.style.position = "absolute";
            
            if (x > maxX) {
                activeDice.style.left = `${maxX - 7}px`;
            } else if (x < minX) {
                activeDice.style.left = `${minX + 5}px`;
            } else {
                activeDice.style.left = `${x}px`;
            }

            if (y > maxY) {
                activeDice.style.top = `${maxY - 9}px`;
            } else if (y < minY) {
                activeDice.style.top = `${minY + 5}px`;
            } else {
                activeDice.style.top = `${y}px`;
            }

        }
    }

    function dropPiece(e) {
        if (activeDice) {
            const element = e.target;
            element.parentNode.removeChild(element);
            let currElems = document.elementsFromPoint(e.clientX, e.clientY);
            let parentSquare = Array.from(currElems).filter(fil => fil.className == "boardsquare")[0];
            parentSquare.appendChild(element);
            let offsets = parentSquare.getBoundingClientRect();

            const x = offsets.left + 1;
            const y = offsets.top + 1;
            activeDice.style.top = `${y}px`;
            activeDice.style.left = `${x}px`;
            activeDice.style.position = "static";

            activeDice = null;

            currentBoardState = exportBoardArray();
            
        }
    }

    function getBoardSquares() {
        let board = boardRef.current;
        return board.getElementsByClassName("boardsquare");
    }
    function exportBoardArray() {
        let boardStateArray = [];
        let board = getBoardSquares();

        for (const square of board) {
            let squareContents = square.getElementsByClassName("dice");
            let contents = squareContents.item(0);

            if (contents) {
                boardStateArray.push(contents.textContent);
            } else {
                boardStateArray.push(null);
            }
        }
        return boardStateArray;
    }

    return (<div onMouseDown={e => grabPiece(e)}
                 onMouseMove={e => movePiece(e)}
                 onMouseUp={e => dropPiece(e)}
                 on
                 className="board"
                 ref={boardRef}>{boardArray}</div>
                 );
}
