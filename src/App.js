import React, {useState, useEffect} from 'react';
import './App.css';
/* import Board from './Board' */
import styled from 'styled-components'
import SquareOnBoard from './components/SquareOnBoard'

function App() {
 const DARK_COLOR = 'green'
 const LIGHT_COLOR = 'tan'
 const [state, setState] = useState({
   playerColor: 'white',
   turn: 'white',
   pov: 'white',
   position: [
   [{
     rank: '1',
     file: 'a',
     piece: 'white-rook',
     squareColor: `${DARK_COLOR}`
   },
   {
     rank: '1',
     file: 'b',
     piece: 'white-knight',
     squareColor: `${LIGHT_COLOR}`
   },
   {
     rank: '1',
     file: 'c',
     piece: 'white-bishop',
     squareColor: `${DARK_COLOR}`
   },
   {
     rank: '1',
     file: 'd',
     piece: 'white-queen',
     squareColor: `${LIGHT_COLOR}`
   },
   {
     rank: '1',
     file: 'e',
     piece: 'white-king',
     squareColor: `${DARK_COLOR}`
   },
   {
     rank: '1',
     file: 'f',
     piece: 'white-bishop',
     squareColor: `${LIGHT_COLOR}`
   },
   {
     rank: '1',
     file: 'g',
     piece: 'white-knight',
     squareColor: `${DARK_COLOR}`
   },
   {
     rank: '1',
     file: 'h',
     piece: 'white-rook',
     squareColor: `${LIGHT_COLOR}`
   }],
   [
   {
     rank: '2',
     file: 'a',
     piece: 'white-pawn',
     squareColor: `${LIGHT_COLOR}`
   },
   {
     rank: '2',
     file: 'b',
     piece: 'white-pawn',
     squareColor: `${DARK_COLOR}`
   },
   {
     rank: '2',
     file: 'c',
     piece: 'white-pawn',
     squareColor: `${LIGHT_COLOR}`
   },
   {
     rank: '2',
     file: 'd',
     piece: 'white-pawn',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '2',
     file: 'e',
     piece: 'white-pawn',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '2',
     file: 'f',
     piece: 'white-pawn',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '2',
     file: 'g',
     piece: 'white-pawn',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '2',
     file: 'h',
     piece: 'white-pawn',
     squareColor:`${DARK_COLOR}`
   }],
   [
   {
     rank: '3',
     file: 'a',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '3',
     file: 'b',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '3',
     file: 'c',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '3',
     file: 'd',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '3',
     file: 'e',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '3',
     file: 'f',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '3',
     file: 'g',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '3',
     file: 'h',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   }],
   [
   {
     rank: '4',
     file: 'a',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '4',
     file: 'b',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '4',
     file: 'c',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '4',
     file: 'd',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '4',
     file: 'e',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '4',
     file: 'f',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '4',
     file: 'g',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '4',
     file: 'h',
     piece: '',
     squareColor:`${DARK_COLOR}`
   }],[
   {
     rank: '5',
     file: 'a',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '5',
     file: 'b',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '5',
     file: 'c',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '5',
     file: 'd',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '5',
     file: 'e',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '5',
     file: 'f',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '5',
     file: 'g',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '5',
     file: 'h',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   }],[
   {
     rank: '6',
     file: 'a',
     piece: '',
     squareColor: `${LIGHT_COLOR}`
   },
   {
     rank: '6',
     file: 'b',
     piece: '',
     squareColor: `${DARK_COLOR}`
   },
   {
     rank: '6',
     file: 'c',
     piece: '',
     squareColor: `${LIGHT_COLOR}`
   },
   {
     rank: '6',
     file: 'd',
     piece: '',
     squareColor: `${DARK_COLOR}`
   },
   {
     rank: '6',
     file: 'e',
     piece: '',
     squareColor: `${LIGHT_COLOR}`
   },
   {
     rank: '6',
     file: 'f',
     piece: '',
     squareColor: `${DARK_COLOR}`
   },
   {
     rank: '6',
     file: 'g',
     piece: '',
     squareColor: `${LIGHT_COLOR}`
   },
   {
     rank: '6',
     file: 'h',
     piece: '',
     squareColor: `${DARK_COLOR}`
   }],[
   {
     rank: '7',
     file: 'a',
     piece: 'black-pawn',
     squareColor: `${DARK_COLOR}`
   },
   {
     rank: '7',
     file: 'b',
     piece: 'black-pawn',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '7',
     file: 'c',
     piece: 'black-pawn',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '7',
     file: 'd',
     piece: 'black-pawn',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '7',
     file: 'e',
     piece: 'black-pawn',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '7',
     file: 'f',
     piece: 'black-pawn',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '7',
     file: 'g',
     piece: 'black-pawn',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '7',
     file: 'h',
     piece: 'black-pawn',
     squareColor:`${LIGHT_COLOR}`
   }],[
   {
     rank: '8',
     file: 'a',
     piece: 'black-rook',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '8',
     file: 'b',
     piece: 'black-knight',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '8',
     file: 'c',
     piece: 'black-bishop',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '8',
     file: 'd',
     piece: 'black-queen',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '8',
     file: 'e',
     piece: 'black-king',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '8',
     file: 'f',
     piece: 'black-bishop',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '8',
     file: 'g',
     piece: 'black-knight',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '8',
     file: 'h',
     piece: 'black-rook',
     squareColor:`${DARK_COLOR}`
   }]]
  })

 const [squares, setSquares] = useState([]);

 const updateBoard = (currentId, destinationId) =>{
    console.log("UPDATE BOARD", currentId, destinationId);
    let temp = [...state.position];
    let currentRow = currentId[1] - 1;
    let currentCol = temp[currentRow].findIndex(element => element.file === currentId[0]);
    let piece = temp[currentRow][currentCol].piece;
    temp[currentRow][currentCol].piece = '';

    let destRow = destinationId[1] - 1;
    let destCol = temp[destRow].findIndex(element => element.file === destinationId[0])
    temp[destRow][destCol].piece = piece;

    setState({...state, position: temp});

    console.log(state);

  }

  useEffect(() => {
    console.log('test');
    let temp = [];
    let count = 1;
    if(state.pov === 'black'){
      for(let i = 0; i < 8; i++){
        for(let j = 7; j >= 0; j--){
          temp.push(<SquareOnBoard key = {count} position={state.position[i][j]} updateBoard={updateBoard}/>);
          count++;
        }
      }
    }else{
      for(let i = 7; i >= 0; i--){
        for(let j = 0; j < 8; j++){
          temp.push(<SquareOnBoard key = {count} position={state.position[i][j]} updateBoard={updateBoard}/>);
          count++;
        }
      }
    }
    setSquares(temp);
    console.log("UPDATE");
  },[state.pov, state.position])

  

 const flipBoard = () => {
   state.pov === 'white' ? setState({...state, pov: 'black'}) : setState({...state, pov: 'white'});
 }

  return (
    <div className='App'>
        <h1>Turn: {state.turn}</h1>
        <Container> 
          <Board> 
            {squares}
          </Board>
        </Container>
        <button onClick={flipBoard}>Flip Board</button>
    </div>
  );
}

const Board = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto;
  margin: 0px;
  width: 100%;
  background-color: black;
`

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 50px auto;
`


export default App;