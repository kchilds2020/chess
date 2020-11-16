import React, {useContext} from 'react'
import MatchState from './state/MatchState'
import styled from 'styled-components'
import Square from './Square'
import updateBoard from './utilities/updateBoard'
const Board = () => {
   const {state} = useContext(MatchState)
  
    return (
        <BoardDiv> 
        {
          state.pov === 'black' ? 
            state.position.map(row => row.slice(0).reverse().map((col,index) => <Square key = {index} position={col} updateBoard={updateBoard}/>) ) :
            state.position.slice(0).reverse().map((row => row.map((col,index) => <Square key = {index} position={col} updateBoard={updateBoard}/>)))
        }
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
