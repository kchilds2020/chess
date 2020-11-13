import React, {useState, useEffect} from 'react';
import './App.css';
import Squares from './components/Squares'
import Turn from './components/Turn'
import Rank from './components/Rank'
import SquareOnBoard from './components/SquareOnBoard';

function Board() {

  const [position, setPosition] = useState([
    [
      {
        chessLocation: 'a1',
        col: 0,
        row: 0,
        piece: 'WhiteRook'
      },
      {
        chessLocation: 'b1',
        col: 1,
        row: 0,
        piece: 'WhiteKnight'
      },
      {
        chessLocation: 'c1',
        col: 2,
        row: 0,
        piece: 'WhiteBishop'
      },
      {
        chessLocation: 'd1',
        col: 3,
        row: 0,
        piece: 'WhiteQueen'
      },
      {
        chessLocation: 'e1',
        col: 4,
        row: 0,
        piece: 'WhiteKing'
      },
      {
        chessLocation: 'f1',
        col: 5,
        row: 0,
        piece: 'WhiteBishop'
      },
      {
        chessLocation: 'g1',
        col: 6,
        row: 0,
        piece: 'WhiteKnight'
      },
      {
        chessLocation: 'h1',
        col: 7,
        row: 0,
        piece: 'WhiteRook'
      }
    ],
    [
      {
        chessLocation: 'a2',
        col: 0,
        row: 1,
        piece: 'WhitePawn'
      },
      {
        chessLocation: 'b2',
        col: 1,
        row: 1,
        piece: 'WhitePawn'
      },
      {
        chessLocation: 'c2',
        col: 2,
        row: 1,
        piece: 'WhitePawn'
      },
      {
        chessLocation: 'd2',
        col: 3,
        row: 1,
        piece: 'WhitePawn'
      },
      {
        chessLocation: 'e2',
        col: 4,
        row: 1,
        piece: 'WhitePawn'
      },
      {
        chessLocation: 'f2',
        col: 5,
        row: 1,
        piece: 'WhitePawn'
      },
      {
        chessLocation: 'g2',
        col: 6,
        row: 1,
        piece: 'WhitePawn'
      },
      {
        chessLocation: 'h2',
        col: 7,
        row: 1,
        piece: 'WhitePawn'
      }
    ],
    [
      {
        chessLocation: 'a3',
        col: 0,
        row: 2,
        piece: ''
      },
      {
        chessLocation: 'b3',
        col: 1,
        row: 2,
        piece: ''
      },
      {
        chessLocation: 'c3',
        col: 2,
        row: 2,
        piece: ''
      },
      {
        chessLocation: 'd3',
        col: 3,
        row: 2,
        piece: ''
      },
      {
        chessLocation: 'e3',
        col: 4,
        row: 2,
        piece: ''
      },
      {
        chessLocation: 'f3',
        col: 5,
        row: 2,
        piece: ''
      },
      {
        chessLocation: 'g3',
        col: 6,
        row: 2,
        piece: ''
      },
      {
        chessLocation: 'h3',
        col: 7,
        row: 2,
        piece: ''
      }
    ],
    [
      {
        chessLocation: 'a4',
        col: 0,
        row: 3,
        piece: ''
      },
      {
        chessLocation: 'b4',
        col: 1,
        row: 3,
        piece: ''
      },
      {
        chessLocation: 'c4',
        col: 2,
        row: 3,
        piece: ''
      },
      {
        chessLocation: 'd4',
        col: 3,
        row: 3,
        piece: ''
      },
      {
        chessLocation: 'e4',
        col: 4,
        row: 3,
        piece: ''
      },
      {
        chessLocation: 'f4',
        col: 5,
        row: 3,
        piece: ''
      },
      {
        chessLocation: 'g4',
        col: 6,
        row: 3,
        piece: ''
      },
      {
        chessLocation: 'h4',
        col: 7,
        row: 3,
        piece: ''
      }
    ],
    [
      {
        chessLocation: 'a5',
        col: 0,
        row: 4,
        piece: ''
      },
      {
        chessLocation: 'b5',
        col: 1,
        row: 4,
        piece: ''
      },
      {
        chessLocation: 'c5',
        col: 2,
        row: 4,
        piece: ''
      },
      {
        chessLocation: 'd5',
        col: 3,
        row: 4,
        piece: ''
      },
      {
        chessLocation: 'e5',
        col: 4,
        row: 4,
        piece: ''
      },
      {
        chessLocation: 'f5',
        col: 5,
        row: 4,
        piece: ''
      },
      {
        chessLocation: 'g5',
        col: 6,
        row: 4,
        piece: ''
      },
      {
        chessLocation: 'h5',
        col: 7,
        row: 4,
        piece: ''
      }
    ],
    [
      {
        chessLocation: 'a6',
        col: 0,
        row: 5,
        piece: ''
      },
      {
        chessLocation: 'b6',
        col: 1,
        row: 5,
        piece: ''
      },
      {
        chessLocation: 'c6',
        col: 2,
        row: 5,
        piece: ''
      },
      {
        chessLocation: 'd6',
        col: 3,
        row: 5,
        piece: ''
      },
      {
        chessLocation: 'e6',
        col: 4,
        row: 5,
        piece: ''
      },
      {
        chessLocation: 'f6',
        col: 5,
        row: 5,
        piece: ''
      },
      {
        chessLocation: 'g6',
        col: 6,
        row: 5,
        piece: ''
      },
      {
        chessLocation: 'h6',
        col: 7,
        row: 5,
        piece: ''
      }
    ],
    [
      {
        chessLocation: 'a7',
        col: 0,
        row: 6,
        piece: 'BlackPawn'
      },
      {
        chessLocation: 'b7',
        col: 1,
        row: 6,
        piece: 'BlackPawn'
      },
      {
        chessLocation: 'c7',
        col: 2,
        row: 6,
        piece: 'BlackPawn'
      },
      {
        chessLocation: 'd7',
        col: 3,
        row: 6,
        piece: 'BlackPawn'
      },
      {
        chessLocation: 'e7',
        col: 4,
        row: 6,
        piece: 'BlackPawn'
      },
      {
        chessLocation: 'f7',
        col: 5,
        row: 6,
        piece: 'BlackPawn'
      },
      {
        chessLocation: 'g7',
        col: 6,
        row: 6,
        piece: 'BlackPawn'
      },
      {
        chessLocation: 'h7',
        col: 7,
        row: 6,
        piece: 'BlackPawn'
      }
    ],
    [
      {
        chessLocation: 'a8',
        col: 0,
        row: 7,
        piece: 'BlackRook'
      },
      {
        chessLocation: 'b8',
        col: 1,
        row: 7,
        piece: 'BlackKnight'
      },
      {
        chessLocation: 'c8',
        col: 2,
        row: 7,
        piece: 'BlackBishop'
      },
      {
        chessLocation: 'd8',
        col: 3,
        row: 7,
        piece: 'BlackQueen'
      },
      {
        chessLocation: 'e8',
        col: 4,
        row: 7,
        piece: 'BlackKing'
      },
      {
        chessLocation: 'f8',
        col: 5,
        row: 7,
        piece: 'BlackBishop'
      },
      {
        chessLocation: 'g8',
        col: 6,
        row: 7,
        piece: 'BlackKnight'
      },
      {
        chessLocation: 'h8',
        col: 7,
        row: 7,
        piece: 'BlackRook'
      }
    ]
  ]);

  const [player, setPlayer] = useState('White');
  const [change ,setChange] = useState(0);
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    console.log('test');
    let temp = [];
    for(let i = 0; i < 64; i++){
      temp.push(<SquareOnBoard />);
    }
    setSquares(temp);
    console.log(squares);
  },[])

  const updateBoard = (oldPosition, newPosition) => {
    let temp = position;
    let currentColumn = oldPosition.length > 2 ? parseInt(oldPosition.slice(2)) : parseInt(oldPosition.slice(1));
    let currentRow = parseInt(oldPosition.slice(0,1));
    let desiredRow = parseInt(newPosition.slice(0,1));
    let desiredColumn = newPosition.length > 2 ? parseInt(newPosition.slice(2)) : parseInt(newPosition.slice(1));

    temp[desiredRow][desiredColumn].piece = temp[currentRow][currentColumn].piece;
    temp[currentRow][currentColumn].piece = '';

    setPosition(temp);
   /*  setChange(change + 1); */
    console.log(position);
}

  return (
    <div className="boardContainer">
      {/* <Turn player={player}/> */}
      <h1>{change}</h1>
      
      <div className="Board">
        {/* <Squares position={position} updateBoard={updateBoard} updatePlayer={setPlayer}/> */}
        {/* <Rank starting={8}/>
        <Rank starting={7}/>
        <Rank starting={6}/>
        <Rank starting={5}/>
        <Rank starting={4}/>
        <Rank starting={3}/>
        <Rank starting={2}/>
        <Rank starting={1}/> */}
        {
          squares
        }
      </div>
    </div>
  );
}



export default Board;
