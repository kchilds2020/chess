import React, {useContext} from 'react';
import Board from './Board'
import styled from 'styled-components'
import MatchState from './state/MatchState'

function Match() {
  const {state, setState} = useContext(MatchState)


 const flipBoard = () => {
   state.pov === 'white' ? setState({...state, pov: 'black'}) : setState({...state, pov: 'white'});
 }

  return (
    <div className='App'>
        {state.winner === 'incomplete' ? <h1>Turn: {state.turn}</h1> : <h1>WINNER: {state.winner}</h1>}
        <Container> 
          <Board />
        </Container>
        <button onClick={flipBoard}>Flip Board</button>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 50px auto;
`


export default Match;