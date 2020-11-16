import React, {useState, useContext, useEffect} from 'react'
import MatchState from './state/MatchState'
import styled from 'styled-components'
import Square from './Square'
import updateBoard from './utilities/updateBoard'
const Board = () => {
   const {state} = useContext(MatchState)
  
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    console.log('test');
    let temp = [];
    let count = 1;
    if(state.pov === 'black'){
      for(let i = 0; i < 8; i++){
        for(let j = 7; j >= 0; j--){
          temp.push(<Square key = {count} position={state.position[i][j]} updateBoard={updateBoard} />);
          count++;
        }
      }
    }else{
      for(let i = 7; i >= 0; i--){
        for(let j = 0; j < 8; j++){
          temp.push(<Square key = {count} position={state.position[i][j]} updateBoard={updateBoard} />);
          count++;
        }
      }
    }
    setSquares(temp);
    console.log("UPDATE");
    console.log(state.matchRecord)
  },[state.pov, state.position,state.matchRecord])
    return (
        <BoardDiv> 
            {squares}
        </BoardDiv>
    )
}

const BoardDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto;
  margin: 0px;
  width: 100%;
  background-color: black;
`

export default Board
