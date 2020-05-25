import React, {useState} from 'react';
import './App.css';
import Square from './components/Square'
import Squares from './components/Squares'

function Board() {

  const [position, setPosition] = useState([
    [
      {
        col: 'a',
        row: 1,
        piece: 'WhiteRook'
      },
      {
        col: 'b',
        row: 1,
        piece: 'WhiteKnight'
      },
      {
        col: 'c',
        row: 1,
        piece: 'WhiteBishop'
      },
      {
        col: 'd',
        row: 1,
        piece: 'WhiteQueen'
      },
      {
        col: 'e',
        row: 1,
        piece: 'WhiteKing'
      },
      {
        col: 'f',
        row: 1,
        piece: 'WhiteBishop'
      },
      {
        col: 'g',
        row: 1,
        piece: 'WhiteKnight'
      },
      {
        col: 'h',
        row: 1,
        piece: 'WhiteRook'
      }
    ],
    [
      {
        col: 'a',
        row: 2,
        piece: 'WhitePawn'
      },
      {
        col: 'b',
        row: 2,
        piece: 'WhitePawn'
      },
      {
        col: 'c',
        row: 2,
        piece: 'WhitePawn'
      },
      {
        col: 'd',
        row: 2,
        piece: 'WhitePawn'
      },
      {
        col: 'e',
        row: 2,
        piece: 'WhitePawn'
      },
      {
        col: 'f',
        row: 2,
        piece: 'WhitePawn'
      },
      {
        col: 'g',
        row: 2,
        piece: 'WhitePawn'
      },
      {
        col: 'h',
        row: 2,
        piece: 'WhitePawn'
      }
    ],
    [
      {
        col: 'a',
        row: 3,
        piece: ''
      },
      {
        col: 'b',
        row: 3,
        piece: ''
      },
      {
        col: 'c',
        row: 3,
        piece: ''
      },
      {
        col: 'd',
        row: 3,
        piece: ''
      },
      {
        col: 'e',
        row: 3,
        piece: ''
      },
      {
        col: 'f',
        row: 3,
        piece: ''
      },
      {
        col: 'g',
        row: 3,
        piece: ''
      },
      {
        col: 'h',
        row: 3,
        piece: ''
      }
    ],
    [
      {
        col: 'a',
        row: 4,
        piece: ''
      },
      {
        col: 'b',
        row: 4,
        piece: ''
      },
      {
        col: 'c',
        row: 4,
        piece: ''
      },
      {
        col: 'd',
        row: 4,
        piece: ''
      },
      {
        col: 'e',
        row: 4,
        piece: ''
      },
      {
        col: 'f',
        row: 4,
        piece: ''
      },
      {
        col: 'g',
        row: 4,
        piece: ''
      },
      {
        col: 'h',
        row: 4,
        piece: ''
      }
    ],
    [
      {
        col: 'a',
        row: 5,
        piece: ''
      },
      {
        col: 'b',
        row: 5,
        piece: ''
      },
      {
        col: 'c',
        row: 5,
        piece: ''
      },
      {
        col: 'd',
        row: 5,
        piece: ''
      },
      {
        col: 'e',
        row: 5,
        piece: ''
      },
      {
        col: 'f',
        row: 5,
        piece: ''
      },
      {
        col: 'g',
        row: 5,
        piece: ''
      },
      {
        col: 'h',
        row: 5,
        piece: ''
      }
    ],
    [
      {
        col: 'a',
        row: 6,
        piece: ''
      },
      {
        col: 'b',
        row: 6,
        piece: ''
      },
      {
        col: 'c',
        row: 6,
        piece: ''
      },
      {
        col: 'd',
        row: 6,
        piece: ''
      },
      {
        col: 'e',
        row: 6,
        piece: ''
      },
      {
        col: 'f',
        row: 6,
        piece: ''
      },
      {
        col: 'g',
        row: 6,
        piece: ''
      },
      {
        col: 'h',
        row: 6,
        piece: ''
      }
    ],
    [
      {
        col: 'a',
        row: 7,
        piece: 'BlackPawn'
      },
      {
        col: 'b',
        row: 7,
        piece: 'BlackPawn'
      },
      {
        col: 'c',
        row: 7,
        piece: 'BlackPawn'
      },
      {
        col: 'd',
        row: 7,
        piece: 'BlackPawn'
      },
      {
        col: 'e',
        row: 7,
        piece: 'BlackPawn'
      },
      {
        col: 'f',
        row: 7,
        piece: 'BlackPawn'
      },
      {
        col: 'g',
        row: 7,
        piece: 'BlackPawn'
      },
      {
        col: 'h',
        row: 7,
        piece: 'BlackPawn'
      }
    ],
    [
      {
        col: 'a',
        row: 8,
        piece: 'BlackRook'
      },
      {
        col: 'b',
        row: 8,
        piece: 'BlackKnight'
      },
      {
        col: 'c',
        row: 8,
        piece: 'BlackBishop'
      },
      {
        col: 'd',
        row: 8,
        piece: 'BlackQueen'
      },
      {
        col: 'e',
        row: 8,
        piece: 'BlackKing'
      },
      {
        col: 'f',
        row: 8,
        piece: 'BlackBishop'
      },
      {
        col: 'g',
        row: 8,
        piece: 'BlackKnight'
      },
      {
        col: 'h',
        row: 8,
        piece: 'BlackRook'
      }
    ]
  ]);

  const updateBoard = (oldPosition, newPosition) => {
    let temp = position;
    console.log(`oldPosition: ${oldPosition}, newPosition: ${newPosition}`);
    //let currentRank = oldPosition.slice(2);
    let currentRank = oldPosition.length > 2 ? parseInt(oldPosition.slice(2)) : parseInt(oldPosition.slice(1));

    let currentFile = oldPosition.slice(0,1);
    //let desiredRank = newPosition.slice(1);
    let desiredFile = newPosition.slice(0,1);
    let desiredRank = newPosition.length > 2 ? newPosition.slice(2) : newPosition.slice(1);


    let currentColIndex;
    let desiredColIndex

    /* const rank = (element) => {
      element.col === currentFile;
    }; */
    temp[parseInt(desiredRank)-1].forEach((element, index) => {
      if(element.col === desiredFile){
        desiredColIndex = index;
      }
    });

    temp[parseInt(currentRank)-1].forEach((element, index) => {
      if(element.col === currentFile){
        currentColIndex = index;
      }
    });

    temp[parseInt(desiredRank)-1][desiredColIndex] = {
      col: desiredFile,
      row: parseInt(desiredRank),
      piece: temp[parseInt(currentRank)-1][currentColIndex].piece
    }

    temp[parseInt(currentRank)-1][currentColIndex] = {
      col: currentFile,
      row: parseInt(currentRank),
      piece: ''
    }

    setPosition(temp);
/*     console.log(position);
 */  }

  return (
    <div className="Board">
      <Squares position={position} updateBoard={updateBoard}/>

    </div>
  );
}



export default Board;
