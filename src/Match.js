import React, {useState, useEffect, useContext} from 'react';
import './App.css';
/* import Board from './Board' */
import styled from 'styled-components'
import SquareOnBoard from './components/SquareOnBoard'
import updateBoard from './components/utilities/updateBoard'
import MatchState from './components/state/MatchState'

function Match() {
  const {state, setState} = useContext(MatchState)
  
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    console.log('test');
    let temp = [];
    let count = 1;
    if(state.pov === 'black'){
      for(let i = 0; i < 8; i++){
        for(let j = 7; j >= 0; j--){
          temp.push(<SquareOnBoard key = {count} position={state.position[i][j]} updateBoard={updateBoard} state = {state} setState = {setState} />);
          count++;
        }
      }
    }else{
      for(let i = 7; i >= 0; i--){
        for(let j = 0; j < 8; j++){
          temp.push(<SquareOnBoard key = {count} position={state.position[i][j]} updateBoard={updateBoard} state = {state} setState = {setState} />);
          count++;
        }
      }
    }
    setSquares(temp);
    console.log("UPDATE");
    console.log(state.matchRecord)
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


export default Match;